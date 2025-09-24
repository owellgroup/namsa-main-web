"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
    title?: string
    description?: string
  }>
  autoPlay?: boolean
  interval?: number
  showTitles?: boolean
}

export function ImageSlider({ images, autoPlay = true, interval = 4000, showTitles = false }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {showTitles && (image.title || image.description) && (
            <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 md:p-8">
              <div className="text-center max-w-4xl">
                {image.title && (
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 gradient-text text-balance transition-all duration-1000 ${
                      index === currentIndex ? "animate-bounce-in opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p
                    className={`text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-pretty transition-all duration-1000 delay-300 ${
                      index === currentIndex
                        ? "animate-slide-in-up opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {!showTitles && image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
              <p className="text-white text-sm md:text-base font-medium">{image.caption}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 md:h-10 md:w-10"
        onClick={goToPrev}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 md:h-10 md:w-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
