import Image from "next/image"
import { Award, BadgeCheck, GraduationCap, Mail, MapPin, Trophy } from "lucide-react"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand-icons"
import {
  achievements,
  certifications,
  experience,
  languages,
  profile,
  quote,
  skillGroups,
  stats,
} from "@/lib/content"

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", href: profile.links.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.links.linkedin },
  { icon: XIcon, label: "X", href: profile.links.twitter },
  { icon: Mail, label: "Email", href: profile.links.email },
]

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="inline-block h-3.5 w-[3px] rounded-full bg-primary" />
      {children}
    </p>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/8 py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] bleed-x">
        <Label>About</Label>

        {/* Identity */}
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          <div>
            <div className="relative aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/12">
              <Image
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="260px"
                className="object-cover object-[50%_15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-10 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-foreground/75 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{profile.name}</h2>
            <p className="mt-2 text-sm font-semibold text-primary md:text-base">{profile.role}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              {profile.location}
            </p>

            <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/75 md:text-base">
              {profile.bio}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-card/60 px-4 py-3.5"
                >
                  <dd className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {quote && (
          <figure className="mx-auto mt-16 max-w-3xl border-l-2 border-primary pl-6">
            <blockquote className="text-pretty text-lg font-medium leading-relaxed text-foreground/90 md:text-xl">
              “{quote.text}”
            </blockquote>
            {quote.attribution && (
              <figcaption className="mt-3 text-xs text-muted-foreground">
                — {quote.attribution}
              </figcaption>
            )}
          </figure>
        )}

        {/* Experience + achievements */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Label>Experience</Label>
            <ol className="relative space-y-7 border-l border-white/12 pl-6">
              {experience.map((role) => (
                <li key={`${role.org}-${role.title}`} className="relative">
                  <span
                    className="absolute -left-[1.9rem] top-1 grid size-6 place-items-center rounded-full border border-white/15 bg-elevated text-foreground/60"
                    aria-hidden="true"
                  >
                    {role.kind === "education" ? (
                      <GraduationCap className="size-3" />
                    ) : (
                      <BadgeCheck className="size-3" />
                    )}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                    {role.period}
                  </p>
                  <h3 className="mt-1 text-[15px] font-bold leading-snug">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.org}</p>
                  <ul className="mt-2 space-y-1.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="text-xs leading-relaxed text-foreground/65 before:mr-2 before:text-primary before:content-['—']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <Label>Achievements</Label>
            <ul className="space-y-2.5">
              {achievements.map((a) => (
                <li
                  key={a.event}
                  className={`flex items-start gap-3 rounded-xl border p-4 transition ${
                    a.top
                      ? "border-primary/40 bg-primary/[0.07]"
                      : "border-white/10 bg-card/50"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg ${
                      a.top ? "bg-primary text-primary-foreground" : "bg-white/[0.07] text-foreground/60"
                    }`}
                    aria-hidden="true"
                  >
                    {a.top ? <Trophy className="size-4" /> : <Award className="size-4" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{a.placement}</span>
                    <span className="block text-xs leading-relaxed text-muted-foreground">
                      {a.event}
                      {a.year && ` · ${a.year}`}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Toolkit */}
        <div className="mt-16">
          <Label>Toolkit</Label>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-foreground/45">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-foreground/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications + languages */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Label>Certifications</Label>
            <div className="grid gap-6 sm:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.issuer}>
                  <h3 className="mb-2 text-xs font-bold text-foreground/80">{cert.issuer}</h3>
                  <ul className="space-y-1">
                    {cert.items.map((item) => (
                      <li key={item} className="text-xs leading-relaxed text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Languages</Label>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-2 text-sm"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs text-muted-foreground">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
