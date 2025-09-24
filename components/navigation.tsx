
"use client"
import { Button } from "@/components/ui/button"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-white py-3 text-lg font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 md:space-x-8">
              <div className="flex items-center space-x-3">
                <span className="text-base md:text-lg font-medium">info@namsa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-base md:text-lg font-medium">+264 81 232 0168</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="font-bold text-base md:text-lg">Empowering Artists to Control Their Music in Namibia</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo-namsa.png"
                alt="NAMSA Logo"
                width={260}
                height={84}
                className="h-20 md:h-19 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-bold text-lg flex items-center space-x-2"
              >
                <span>Home</span>
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors font-bold text-lg flex items-center space-x-2"
              >
                <span>Services</span>
              </Link>
              <Link
                href="/apply"
                className="text-foreground hover:text-primary transition-colors font-bold text-lg flex items-center space-x-2"
              >
                <span>Apply for License</span>
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-bold text-lg flex items-center space-x-2"
              >
                <span>About</span>
              </Link>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-6 py-3 h-12"
              >
                <Link href="https://namsa.vercel.app/" target="_blank">
                  Login / Register
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-card border-t border-border">
                <Link
                  href="/"
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-primary transition-colors font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Home</span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-primary transition-colors font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Services</span>
                </Link>
                <Link
                  href="/apply"
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-primary transition-colors font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Apply for License</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-primary transition-colors font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <span>About</span>
                </Link>
                <div className="px-4 py-3">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-3 h-12"
                  >
                    <Link href="https://namsa.vercel.app/" target="_blank">
                      Login / Register
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
