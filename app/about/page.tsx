import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ImageSlider } from "@/components/image-slider"
import Image from "next/image"

export default function AboutPage() {
  const aboutImages = [
    {
      src: "/images/drum.jpg",
      alt: "Traditional Music Heritage",
      title: "Cultural Preservation",
      description: "Celebrating and protecting traditional Namibian musical instruments and heritage",
    },
    {
      src: "/images/musicians.jpg",
      alt: "Community Support",
      title: "Community Engagement",
      description: "Building strong relationships with local musicians and cultural communities",
    },
    {
      src: "/images/artist-red-leather.jpg",
      alt: "Modern Innovation",
      title: "Digital Innovation",
      description: "Bridging traditional music culture with modern digital distribution systems",
    },
    {
      src: "https://1rtratxi2xcqflcd.public.blob.vercel-storage.com/Slider2.jpg",
      alt: "Diverse Talent",
      title: "Talent Development",
      description: "Showcasing and nurturing the incredible diversity of Namibian musical talent",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-28">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <ImageSlider images={aboutImages} showTitles={true} />
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Our Mission</h2>
                <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6 leading-relaxed">
                  NAMSA is dedicated to protecting and empowering Namibian artists through comprehensive music rights
                  management and royalty collection services. We bridge the gap between traditional music culture and
                  modern digital distribution systems.
                </p>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Our platform ensures that artists receive fair compensation for their creative work while providing
                  music users with legal access to quality Namibian music content.
                </p>
              </div>

              <Card className="bg-card/50 backdrop-blur-sm border-border animate-slide-in-left">
                <CardContent className="p-0">
                  <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                    <Image
                      src="/images/drum.jpg"
                      alt="Traditional African Music"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in-up lg:order-1">
                <CardContent className="p-0">
                  <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                    <Image
                      src="/images/musicians.jpg"
                      alt="Namibian Musicians"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="animate-slide-in-left lg:order-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Our Vision</h2>
                <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6 leading-relaxed">
                  To become the leading music rights organization in Namibia, fostering a thriving music ecosystem where
                  artists are fairly compensated and music users have seamless access to licensed content.
                </p>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  We envision a future where Namibian music reaches global audiences while maintaining its cultural
                  authenticity and ensuring sustainable income for our creative community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Credit */}
        <section className="py-12 md:py-16 px-4 bg-primary/10 border-y border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 animate-fade-in-up">
              Developed by
            </h3>
            <p className="text-lg md:text-xl gradient-text font-semibold animate-slide-in-left">
              owellgraphics.com
            </p>
            <p className="text-white/80 mt-4 text-sm md:text-base">
              Innovative solutions for the Namibian music industry
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
