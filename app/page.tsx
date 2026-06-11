import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ContentRow } from "@/components/content-row"
import { AboutFooter } from "@/components/about-footer"
import { rows } from "@/lib/content"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div id="projects" className="relative z-10 -mt-20 pb-6">
        {rows.map((row, i) => (
          <div key={row.title} id={i === 1 ? "articles" : undefined}>
            <ContentRow title={row.title} items={row.items} />
          </div>
        ))}
      </div>
      <AboutFooter />
    </main>
  )
}
