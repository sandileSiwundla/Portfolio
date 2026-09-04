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
      <div className="relative z-10 pb-8">
        {rows.map((row) => (
          <ContentRow key={row.id} id={row.id} title={row.title} items={row.items} />
        ))}
      </div>
      <AboutFooter />
    </main>
  )
}
