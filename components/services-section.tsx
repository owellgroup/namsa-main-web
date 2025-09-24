"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, DollarSign, FileText, Radio, Tv, Store } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Artist Music Protection",
      description: "Upload and protect your music files in our secure database, accessible only to licensed users.",
      gradient: "from-primary to-orange-500",
    },
    {
      icon: DollarSign,
      title: "Royalties Collection",
      description: "Digital collection of royalties from TV channels and radio stations across Namibia.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: FileText,
      title: "License Management",
      description: "Apply for licenses to access registered music for your events and commercial use.",
      gradient: "from-yellow-500 to-primary",
    },
  ]

  const collectionSources = [
    { icon: Tv, name: "Television Channels", count: "15+" },
    { icon: Radio, name: "Radio Stations", count: "25+" },
    { icon: Store, name: "Commercial Stores", count: "100+" },
  ]

  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="max-w-7xl mx-auto">
        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-in-left">
            Comprehensive music industry solutions for Namibian artists and music users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center animate-float`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collection Sources */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">We Collect From</h3>
          <p className="text-lg text-white/80 mb-12">
            Royalties collected digitally across multiple platforms in Namibia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collectionSources.map((source, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 animate-pulse-glow">
                <source.icon className="h-12 w-12 text-primary animate-float" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{source.name}</h4>
              <p className="text-3xl font-bold gradient-text">{source.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
