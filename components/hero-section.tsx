"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Mail, ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function HeroSection() {
  const { t } = useLanguage()

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const headerOffset = 80
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      const headerOffset = 80
      const elementPosition = projectsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">{t("hero.available")}</span>
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-4">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    León Federico
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Huck</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-semibold">{t("hero.subtitle")}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="font-medium">Córdoba, Argentina</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 font-semibold"
                  onClick={handleContactClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t("hero.cta")}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 hover:border-slate-500 text-gray-200 hover:bg-slate-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={scrollToProjects}
                >
                  {t("hero.viewWork")}
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="relative flex justify-center items-center">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"></div>

              {/* Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl">
                  {/* Placeholder for professional photo */}
                  <Image
                    src="/profile/profile.jpeg"
                    alt="León Federico Huck"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
