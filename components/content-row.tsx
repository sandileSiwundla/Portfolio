"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TitleCard } from "@/components/title-card"
import type { Title } from "@/lib/content"

export function ContentRow({ title, items }: { title: string; items: Title[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === "left" ? -el.clientWidth * 0.8 : el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="group/row relative py-4">
      <h2 className="mb-3 px-4 text-lg font-bold tracking-tight md:px-10 md:text-xl">{title}</h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-0 top-0 z-20 hidden h-full w-10 items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 transition-opacity group-hover/row:opacity-100 md:flex"
        >
          <ChevronLeft className="size-7" />
        </button>

        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth px-4 pb-6 pt-2 md:px-10"
        >
          {items.map((item, i) => (
            <TitleCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-0 top-0 z-20 hidden h-full w-10 items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 transition-opacity group-hover/row:opacity-100 md:flex"
        >
          <ChevronRight className="size-7" />
        </button>
      </div>
    </section>
  )
}
