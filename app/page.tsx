import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesSection } from "@/components/services-section"
import { LicenseNotice } from "@/components/license-notice"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <LicenseNotice />
      </main>
      <Footer />
    </div>
  )
}
