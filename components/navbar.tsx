"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 md:px-10">
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#" className="select-none text-xl font-extrabold tracking-tight text-primary md:text-2xl">
            SANDILE
          </a>
          <ul className="hidden items-center gap-5 text-sm text-foreground/80 md:flex">
            <li><a href="#home" className="transition-colors hover:text-foreground">Home</a></li>
            <li><a href="#projects" className="transition-colors hover:text-foreground">Websites</a></li>
            <li><a href="#articles" className="transition-colors hover:text-foreground">Research</a></li>
            <li><a href="#about" className="transition-colors hover:text-foreground">About</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Search className="size-5 text-foreground/80" aria-hidden="true" />
          <a
            href="https://github.com/sandileSiwundla"
            target="_blank"
            rel="noreferrer"
            className="grid size-8 place-items-center rounded bg-primary text-sm font-bold text-primary-foreground"
            aria-label="GitHub profile"
          >
            S
          </a>
        </div>
      </nav>
    </header>
  )
}
