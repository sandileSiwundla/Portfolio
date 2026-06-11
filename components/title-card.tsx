import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Title } from "@/lib/content"

export function TitleCard({ item }: { item: Title }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group relative block w-[240px] shrink-0 overflow-hidden rounded-md bg-card transition-all duration-300 ease-out md:hover:scale-[1.06] md:hover:z-10 md:hover:shadow-2xl md:hover:shadow-black/60"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          sizes="240px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        {item.badge && (
          <span className="absolute left-2 top-2 rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
            {item.badge}
          </span>
        )}
        <h3 className="absolute inset-x-3 bottom-2 text-sm font-bold leading-tight text-balance">
          {item.title}
        </h3>
      </div>

      <div className="grid grid-rows-[0fr] transition-all duration-300 md:group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="p-3">
            {item.meta && (
              <p className="mb-1.5 text-xs font-medium text-primary">{item.meta}</p>
            )}
            <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
              Open <ExternalLink className="size-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
