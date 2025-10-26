"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()

  const contacts = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "leonhuck007@gmail.com",
      action: t("contact.sendEmail"),
      gradient: "from-blue-600 to-teal-600",
      link: "mailto:leonhuck007@gmail.com?subject=Portfolio Contact&body=Hi León, I'd like to get in touch with you.",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "león-federico-huck",
      action: "View Profile",
      gradient: "from-blue-600 to-blue-700",
      link: "https://www.linkedin.com/in/leon-federico-huck",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@lionhuck",
      action: "View Profile",
      gradient: "from-slate-700 to-slate-900",
      link: "https://github.com/lionhuck",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t("contact.title")}
            </h2>
            <p className="text-gray-400 text-lg">{t("contact.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group overflow-hidden"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-lg">{contact.label}</h3>
                      <p className="text-gray-400 text-sm px-2 break-all">{contact.value}</p>
                    </div>

                    <Button
                      onClick={() => window.open(contact.link, "_blank")}
                      className={`w-full bg-gradient-to-r ${contact.gradient} hover:opacity-90 text-white font-semibold transition-all duration-300 hover:scale-105`}
                    >
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
