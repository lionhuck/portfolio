"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/lionhuck",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/leon-federico-huck",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      url: "mailto:leonhuck007@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-2">
                León Federico Huck
              </h3>
              <p className="text-gray-400 text-sm">Junior Full Stack Developer</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/20"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>© {new Date().getFullYear()} León Federico Huck.</span>
              <span>{t("footer.rights")}</span>
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
              {t("footer.madeWith")} <Heart className="w-3 h-3 text-red-500 fill-red-500" /> {t("footer.by")} León
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
