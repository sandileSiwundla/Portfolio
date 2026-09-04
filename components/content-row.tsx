"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TitleCard } from "@/components/title-card"
import type { Title } from "@/lib/content"

export function ContentRow({ id, title, items }: { id: string; title: string; items: Title[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const sync = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setCanLeft(el.scrollLeft > 8)
    setCanRight(el.scrollLeft < max - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    sync()
    el.addEventListener("scroll", sync, { passive: true })
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => {
      el.removeEventListener("scroll", sync)
      observer.disconnect()
    }
  }, [sync])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.85
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section id={id} className="group/row relative scroll-mt-24 py-6 lg:py-8">
      <div className="mb-4 flex items-baseline justify-between gap-4 bleed-x">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{title}</h2>
        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="relative">
        {/* Edge fades hint at more content and only show when there is some. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 lg:w-16 ${
            canLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 lg:w-16 ${
            canRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <ArrowButton side="left" show={canLeft} onClick={() => scroll("left")} />
        <ArrowButton side="right" show={canRight} onClick={() => scroll("right")} />

        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pt-1 bleed-x"
        >
          {items.map((item) => (
            <div key={item.id} className="snap-start">
              <TitleCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowButton({
  side,
  show,
  onClick,
}: {
  side: "left" | "right"
  show: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Scroll left" : "Scroll right"}
      tabIndex={show ? 0 : -1}
      className={`absolute top-1/2 z-20 hidden size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/15 bg-background/80 text-foreground shadow-xl shadow-black/50 backdrop-blur transition duration-300 hover:scale-110 hover:bg-background md:grid ${
        side === "left" ? "left-2 lg:left-4" : "right-2 lg:right-4"
      } ${
        show
          ? "opacity-0 group-hover/row:opacity-100 focus-visible:opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {side === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  )
}
