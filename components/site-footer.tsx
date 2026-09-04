import { profile } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground bleed-x sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Building the future, one block at a time.
        </p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
