"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Menu, Search, X } from "lucide-react"
import { catalog } from "@/lib/content"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Websites" },
  { href: "#articles", label: "Research" },
  { href: "#about", label: "About" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false)
        setMenuOpen(false)
      }
      // "/" is the conventional jump-to-search shortcut.
      if (e.key === "/" && !isTypingTarget(e.target)) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
    else setQuery("")
  }, [searchOpen])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return catalog
      .filter((item) =>
        [item.title, item.description, item.meta ?? "", ...item.tags]
          .join(" ")
          .toLowerCase()
          .includes(q),
      )
      .slice(0, 6)
  }, [query])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen || searchOpen
          ? "border-b border-white/8 bg-background/90 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/70 via-black/25 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center gap-4 py-3.5 bleed-x">
        <a
          href="#home"
          className="select-none text-xl font-extrabold tracking-tight text-primary md:text-2xl"
        >
          SANDILE
        </a>

        <ul className="hidden items-center gap-6 text-sm text-foreground/70 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          {/* Expanding search — the icon used to be decorative. */}
          <div
            className={`flex items-center overflow-hidden rounded-full border transition-all duration-300 ${
              searchOpen
                ? "w-44 border-white/20 bg-black/50 sm:w-64"
                : "w-9 border-transparent bg-transparent"
            }`}
          >
            <button
              type="button"
              onClick={() => setSearchOpen((o) => !o)}
              aria-label={searchOpen ? "Close search" : "Search work"}
              aria-expanded={searchOpen}
              className="grid size-9 shrink-0 cursor-pointer place-items-center text-foreground/70 transition hover:text-foreground"
            >
              {searchOpen ? <X className="size-4" /> : <Search className="size-[18px]" />}
            </button>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Projects, articles, tags…"
              aria-label="Search projects and articles"
              tabIndex={searchOpen ? 0 : -1}
              className="w-full bg-transparent pr-3 text-sm text-foreground outline-none placeholder:text-foreground/40"
            />
          </div>

          <a
            href="https://github.com/sandileSiwundla"
            target="_blank"
            rel="noreferrer"
            className="grid size-8 place-items-center rounded bg-primary text-sm font-bold text-primary-foreground transition hover:opacity-85"
            aria-label="GitHub profile"
          >
            S
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid size-9 cursor-pointer place-items-center text-foreground/80 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="border-t border-white/8 pb-3 text-sm bleed-x md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {searchOpen && query.trim() && (
        <div className="border-t border-white/8 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-[1600px] py-3 bleed-x">
            {results.length === 0 ? (
              <p className="py-4 text-sm text-muted-foreground">
                No matches for “{query.trim()}”.
              </p>
            ) : (
              <ul className="grid gap-1 sm:grid-cols-2">
                {results.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-lg p-2 transition hover:bg-white/[0.06]"
                    >
                      <div className="relative aspect-video w-20 shrink-0 overflow-hidden rounded bg-elevated">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{item.title}</p>
                        <p className="truncate text-xs text-muted-foreground">
                          {item.kind === "article" ? "Article" : "Project"} · {item.meta}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-foreground/30 transition group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

function isTypingTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null
  if (!el) return false
  return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable
}
