import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image src="/images/namsa-logo.png" alt="NAMSA Logo" width={150} height={50} className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Namibian Music System Administration - Protecting artists and managing music royalties across Namibia
              through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="sm">
                <Link href="https://namsa.vercel.app/" target="_blank">
                  Artist Portal
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="https://namsa.vercel.app/" target="_blank">
                  Apply License
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors">
                  Apply for License
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Windhoek, Namibia</li>
              <li>info@namsa.na</li>
              <li>+264 61 123 456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 NAMSA. All rights reserved. Developed by Joel Chipoya Kalimbwe (owell).
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
