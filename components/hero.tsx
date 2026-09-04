"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight, Info, Pause, Play } from "lucide-react"
import { featuredItems } from "@/lib/content"
import { BrowserFrame } from "@/components/browser-frame"

const SLIDE_MS = 7000
// A slide carrying a screencast holds long enough to let the clip run once.
const VIDEO_SLIDE_MS = 11000

export function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = featuredItems[index]
  const slideMs = current.video ? VIDEO_SLIDE_MS : SLIDE_MS

  const goTo = useCallback((next: number) => {
    setIndex((next + featuredItems.length) % featuredItems.length)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return
    // A timeout rather than an interval: the dwell varies per slide.
    const timer = setTimeout(() => setIndex((i) => (i + 1) % featuredItems.length), slideMs)
    return () => clearTimeout(timer)
  }, [paused, index, slideMs])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Featured work"
      className="relative isolate overflow-hidden pt-24 pb-10 sm:pt-28 lg:pt-32 lg:pb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/*
        The artwork here is website screenshots, not poster art — laying it
        full-bleed behind the copy puts two typefaces on top of each other.
        So the screenshot only ever appears crisp inside the framed device,
        and the background gets a heavily blurred copy of it purely for colour.
      */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {featuredItems.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="scale-125 object-cover blur-[80px] saturate-150"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
      </div>

      <div className="mx-auto grid max-w-[1600px] items-center gap-10 bleed-x lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-3.5 w-[3px] rounded-full bg-primary" />
            Featured work
          </p>

          <div key={current.id} className="enter-up">
            <div className="mb-4 flex flex-wrap items-center gap-2.5 text-xs">
              {current.badge && (
                <span className="rounded-full bg-primary px-2.5 py-1 font-bold uppercase tracking-wide text-primary-foreground">
                  {current.badge}
                </span>
              )}
              <span className="font-medium text-foreground/70">{current.meta}</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-shadow-billboard sm:text-5xl xl:text-6xl">
              {current.title}
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-foreground/75 sm:text-base">
              {current.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={current.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-bold text-background transition hover:bg-foreground/85"
              >
                <Play className="size-4 fill-current" aria-hidden="true" />
                Visit site
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.08] px-6 py-3 text-sm font-bold text-foreground backdrop-blur transition hover:bg-white/[0.14]"
              >
                <Info className="size-4" aria-hidden="true" />
                About me
              </a>
            </div>
          </div>

          {/* Controls sit under the copy so nothing overlaps the headline. */}
          <div className="mt-9 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <ControlButton onClick={prev} label="Previous featured project">
                <ChevronLeft className="size-4" />
              </ControlButton>
              <ControlButton onClick={next} label="Next featured project">
                <ChevronRight className="size-4" />
              </ControlButton>
              <ControlButton
                onClick={() => setPaused((p) => !p)}
                label={paused ? "Resume slideshow" : "Pause slideshow"}
              >
                {paused ? <Play className="size-3.5 fill-current" /> : <Pause className="size-3.5" />}
              </ControlButton>
            </div>

            <div className="flex flex-1 items-center gap-1.5" role="tablist" aria-label="Choose featured project">
              {featuredItems.map((item, i) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={item.title}
                  onClick={() => goTo(i)}
                  className="group relative h-6 max-w-16 flex-1 cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/35">
                    {i === index && (
                      <span
                        key={`${index}-${paused}`}
                        className="block h-full w-full origin-left rounded-full bg-primary"
                        style={{
                          animation: paused
                            ? undefined
                            : `hero-progress ${slideMs}ms linear forwards`,
                          transform: paused ? "scaleX(1)" : undefined,
                        }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Artwork */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/12 blur-3xl"
              aria-hidden="true"
            />
            <a
              key={current.id}
              href={current.link}
              target="_blank"
              rel="noreferrer"
              className="group block enter-up"
            >
              <BrowserFrame
                url={current.link}
                src={current.image}
                video={current.video}
                alt={`Screenshot of ${current.title}`}
                priority
                className="shadow-2xl shadow-black/70 transition-transform duration-500 group-hover:-translate-y-1"
              />
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/60 transition group-hover:text-foreground">
                {hostname(current.link)}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}

function ControlButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/12 bg-white/[0.06] text-foreground/80 backdrop-blur transition hover:bg-white/[0.16] hover:text-foreground"
    >
      {children}
    </button>
  )
}

function hostname(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, "")
  } catch {
    return link
  }
}
