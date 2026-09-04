import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand-icons"
import { profile, stats } from "@/lib/content"

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", href: profile.links.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.links.linkedin },
  { icon: XIcon, label: "X", href: profile.links.twitter },
  { icon: Mail, label: "Email", href: profile.links.email },
]

export function AboutFooter() {
  return (
    <footer id="about" className="relative mt-12 scroll-mt-24 overflow-hidden border-t border-white/8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="mx-auto grid max-w-[1600px] gap-12 py-16 bleed-x lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-24">
        <div>
          <p className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-3.5 w-[3px] rounded-full bg-primary" />
            About
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{profile.name}</h2>
          <p className="mt-2 text-sm font-semibold text-primary">{profile.role}</p>

          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <dl className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-card/60 p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Toolkit
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-foreground/75"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground bleed-x sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Building the future, one block at a time.
          </p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
