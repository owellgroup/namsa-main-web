"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1-NqAP9nVyTNKc97DnkVKBlzVr7msjd4.mp4",
      title: "NAMSA - YOUR MUSIC RIGHTS PARTNER",
      description:
        "Comprehensive music royalty collection and protection services for Namibian artists and the music industry.",
    },
    {
      type: "image",
      src: "https://1rtratxi2xcqflcd.public.blob.vercel-storage.com/slide2.jpg",
      title: "EMPOWERING NAMIBIAN ARTISTS",
      description:
        "From traditional sounds to modern beats, we protect and promote the diverse musical heritage of Namibia.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {slide.type === "video" ? (
            <div className="relative w-full h-full">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src={slide.src} type="video/mp4" />
              </video>
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-5xl px-4 sm:px-6 lg:px-8">
                  <h1
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 gradient-text text-balance transition-all duration-1000 ${
                      index === currentSlide ? "animate-bounce-in opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-sm sm:text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed text-pretty transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "animate-slide-in-up opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image src={slide.src || "/placeholder.svg"} alt="NAMSA Slide" fill className="object-cover" priority />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-5xl px-4 sm:px-6 lg:px-8">
                  <h1
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 gradient-text text-balance transition-all duration-1000 ${
                      index === currentSlide ? "animate-bounce-in opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-sm sm:text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed text-pretty transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "animate-slide-in-up opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/10 z-10 h-10 w-10 md:h-12 md:w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/10 z-10 h-10 w-10 md:h-12 md:w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
