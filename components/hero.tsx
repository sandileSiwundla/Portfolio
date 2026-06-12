"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react"
import { featuredItems } from "@/lib/content"

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const currentItem = featuredItems[currentIndex]

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      goToNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const getImageSrc = () => {
    if (isMobile && currentItem.mobileImage) {
      return currentItem.mobileImage
    }
    return currentItem.image
  }

  return (
    <section
      id="home"
      className="relative h-[85vh] min-h-[560px] w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 transition-transform duration-1000 ease-out">
        <Image
          src={getImageSrc() || "/placeholder.svg"}
          alt={currentItem.title}
          fill
          priority
          className="object-cover scale-105"
        />
      </div>

      {/* Rest of your component remains the same */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full max-w-[1600px] flex-col justify-end px-4 pb-24 md:px-10 md:pb-32">
        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded bg-primary/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-all duration-500 animate-in slide-in-from-bottom-4">
          {currentItem.badge} · {currentItem.meta}
        </span>

        <h1 className="max-w-2xl text-balance text-4xl font-extrabold tracking-tight transition-all duration-500 animate-in slide-in-from-bottom-6 md:text-6xl">
          {currentItem.title}
        </h1>

        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-foreground/80 transition-all duration-500 animate-in slide-in-from-bottom-8 delay-100 md:text-base">
          {currentItem.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 transition-all duration-500 animate-in slide-in-from-bottom-10 delay-200">
          {currentItem.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 transition-all duration-500 animate-in slide-in-from-bottom-12 delay-300">
          <a
            href={currentItem.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-all hover:opacity-85 hover:scale-105"
          >
            <Play className="size-4 fill-current" aria-hidden="true" />
            Visit Site
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded bg-secondary/80 px-6 py-2.5 text-sm font-bold text-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:scale-105"
          >
            <Info className="size-4" aria-hidden="true" />
            More Info
          </a>
        </div>
      </div>
    </section>
  )
}