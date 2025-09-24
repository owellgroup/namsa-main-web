import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const licenseTypes = [
    {
      icon: FileText,
      title: "Event License",
      description: "For public events, concerts, and live performances",
      features: ["Live performances", "Public events", "Concert venues", "Festival usage"],
    },
    {
      icon: Shield,
      title: "Commercial License",
      description: "For businesses, radio, TV, and commercial use",
      features: ["Radio broadcasting", "TV commercials", "Store background music", "Online streaming"],
    },
    {
      icon: Clock,
      title: "Temporary License",
      description: "Short-term usage for specific projects",
      features: ["Film soundtracks", "Advertising campaigns", "Short-term events", "Project-based usage"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
              Apply for <span className="gradient-text">License</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed animate-slide-in-left mb-6 md:mb-8">
              Get legal access to registered Namibian music for your events and commercial use
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-pulse-glow"
            >
              <Link href="https://namsa.vercel.app/" target="_blank" className="inline-flex items-center gap-2">
                Start Application <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* License Types */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
                License Types
              </h2>
              <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto animate-slide-in-left">
                Choose the right license type for your specific music usage needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {licenseTypes.map((license, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                      <license.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-white group-hover:text-primary transition-colors">
                      {license.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4 md:mb-6 text-center text-sm md:text-base">{license.description}</p>
                    <ul className="space-y-2">
                      {license.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white/80 text-sm md:text-base">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12 md:py-16 px-4 bg-primary/10 border-y border-primary/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center animate-fade-in-up">
              Application Process
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center animate-slide-in-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg md:text-xl font-bold text-primary-foreground">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Submit Application</h4>
                <p className="text-white/70 text-sm md:text-base">
                  Complete the online application form with your usage details
                </p>
              </div>
              <div className="text-center animate-fade-in-up">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg md:text-xl font-bold text-primary-foreground">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Review & Approval</h4>
                <p className="text-white/70 text-sm md:text-base">
                  Our team reviews your application and processes approval
                </p>
              </div>
              <div className="text-center animate-slide-in-left sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg md:text-xl font-bold text-primary-foreground">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Get License</h4>
                <p className="text-white/70 text-sm md:text-base">
                  Receive your license and start using registered music legally
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
