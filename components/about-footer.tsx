import { Link as LinkIcon, Mail, Code, AtSign } from "lucide-react"
import { profile } from "@/lib/content"

export function AboutFooter() {
  const socials = [
    { icon: Code, label: "GitHub", href: profile.links.github },
    { icon: LinkIcon, label: "LinkedIn", href: profile.links.linkedin },
    { icon: AtSign, label: "Twitter", href: profile.links.twitter },
    { icon: Mail, label: "Email", href: profile.links.email },
  ]

  return (
    <footer id="about" className="mt-10 border-t border-border bg-card/40 px-4 py-16 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{profile.name}</h2>
        <p className="mt-1 text-sm font-semibold text-primary">{profile.role}</p>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          {profile.bio}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Building the future, one block at a time.
        </p>
      </div>
    </footer>
  )
}
