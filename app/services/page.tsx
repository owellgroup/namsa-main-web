import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { LicenseNotice } from "@/components/license-notice"
import { ImageSlider } from "@/components/image-slider"

export default function ServicesPage() {
  const serviceImages = [
    {
      src: "/images/artist-red-leather.jpg",
      alt: "Professional Music Services",
      title: "Rights Management Solutions",
      description: "Comprehensive digital rights management for all your musical works and recordings",
    },
    {
      src: "/images/artist-red-jacket.jpg",
      alt: "Royalty Collection",
      title: "Royalty Collection Services",
      description: "Efficient collection and distribution of performance and mechanical royalties",
    },
    {
      src: "/images/artist-traditional.jpg",
      alt: "Music Licensing",
      title: "Music Licensing Platform",
      description: "Streamlined licensing solutions for broadcasters, venues, and digital platforms",
    },
    {
      src: "/images/musicians.jpg",
      alt: "Artist Support",
      title: "Artist Development Programs",
      description: "Supporting emerging and established artists with industry expertise and resources",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-28">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <ImageSlider images={serviceImages} showTitles={true} />
          </div>
        </section>

        <ServicesSection />
        <LicenseNotice />
      </main>
      <Footer />
    </div>
  )
}
