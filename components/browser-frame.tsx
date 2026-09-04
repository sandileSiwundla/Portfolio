"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

/**
 * Wraps a website screenshot in a browser chrome so it reads as "a site I
 * built" rather than as background texture. The viewport is 2:1 to match the
 * source captures, so nothing gets cropped off the sides.
 *
 * When the item has a screencast, the still is the base layer and the video
 * fades in over it once it is actually rendering frames — so a blocked
 * autoplay, a slow connection, or reduced-motion all degrade to the still
 * rather than to an empty box.
 */
export function BrowserFrame({
  src,
  alt,
  url,
  video,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string
  alt: string
  url?: string
  video?: string
  priority?: boolean
  className?: string
  sizes?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motionOk, setMotionOk] = useState(false)
  const [painting, setPainting] = useState(false)

  // Starts false so the server render and the first client render agree; the
  // video is opted into after mount. CSS alone cannot hold back a <video>.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setMotionOk(!mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el || !video || !motionOk) return
    setPainting(false)
    // preload="none" means play() is also what triggers the fetch.
    el.play().catch(() => {
      /* Autoplay refused — the still underneath is already the fallback. */
    })
    return () => el.pause()
  }, [video, motionOk])

  return (
    <div className={`overflow-hidden rounded-xl border border-white/12 bg-elevated ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </span>
        {url && (
          <span className="ml-1 truncate rounded bg-black/30 px-2 py-0.5 font-mono text-[10px] text-foreground/50">
            {hostname(url)}
          </span>
        )}
      </div>

      <div className="relative aspect-[2/1] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />

        {video && motionOk && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="none"
            // Decorative: the still beneath already carries the alt text.
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setPainting(true)}
            className={`absolute inset-0 size-full object-cover object-top transition-opacity duration-700 ${
              painting ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  )
}

function hostname(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, "")
  } catch {
    return link
  }
}
