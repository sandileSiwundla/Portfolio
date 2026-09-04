import Image from "next/image"
import { ArrowUpRight, FileText, Globe } from "lucide-react"
import type { Title } from "@/lib/content"

export function TitleCard({ item }: { item: Title }) {
  const Kind = item.kind === "article" ? FileText : Globe

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex w-[264px] shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-card transition duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60 focus-visible:-translate-y-1.5 sm:w-[300px]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-elevated">
        <Image
          src={item.image}
          alt={`Preview of ${item.title}`}
          fill
          sizes="(min-width: 640px) 300px, 264px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

        {item.badge && (
          <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-black/40">
            {item.badge}
          </span>
        )}

        <span
          className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-black/50 text-foreground/70 backdrop-blur-sm transition group-hover:bg-primary group-hover:text-primary-foreground"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>

      {/*
        Metadata stays visible instead of expanding on hover. The row is a
        horizontal scroller, which clips overflow on the y-axis too, so a
        grow-on-hover panel gets cut off — and it never worked on touch.
      */}
      <div className="flex flex-1 flex-col p-4 pt-3">
        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
          <Kind className="size-3" aria-hidden="true" />
          {item.meta}
        </p>

        <h3 className="text-balance text-[15px] font-bold leading-snug">{item.title}</h3>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5 pt-0.5">
          {item.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded border border-white/8 bg-white/[0.05] px-1.5 py-0.5 text-[10px] font-medium text-foreground/60"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
