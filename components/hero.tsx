import Image from "next/image"
import { Play, Info } from "lucide-react"
import { featured } from "@/lib/content"

export function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[560px] w-full">
      <Image
        src={featured.image || "/placeholder.svg"}
        alt={featured.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex h-full max-w-[1600px] flex-col justify-end px-4 pb-24 md:px-10 md:pb-32">
        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded bg-primary/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
          {featured.badge} · Featured
        </span>
        <h1 className="max-w-2xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
          {featured.title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-foreground/80 md:text-base">
          {featured.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={featured.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-opacity hover:opacity-85"
          >
            <Play className="size-4 fill-current" aria-hidden="true" />
            Visit Site
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded bg-secondary/80 px-6 py-2.5 text-sm font-bold text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <Info className="size-4" aria-hidden="true" />
            More Info
          </a>
        </div>
      </div>
    </section>
  )
}
