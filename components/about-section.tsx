"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code2, Users, Lightbulb, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Code2,
      title: t("about.fullStack"),
      description: t("about.fullStackDescription"),
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Lightbulb,
      title: t("about.curious"),
      description: t("about.curiousDescription"),
      color: "from-teal-600 to-teal-800",
    },
    {
      icon: Users,
      title: t("about.teamPlayer"),
      description: t("about.teamDescription"),
      color: "from-slate-700 to-slate-900",
    },
    {
      icon: Target,
      title: t("about.problemSolver"),
      description: t("about.problemSolverDescription"),
      color: "from-orange-600 to-orange-800",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">{t("about.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div>
              <div className="text-lg text-gray-700 leading-relaxed mb-6 space-y-4">
                {t("about.description")
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              {/* Quick Highlights - 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg shadow-md mb-3`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4
                        className={`font-bold text-gray-900 mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-3 rounded-lg shadow-md">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {t("about.education")}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Higher Education */}
                    <div className="relative pl-6 border-l-4 border-blue-600">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                      <div className="mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">{t("about.degree")}</h4>
                        <p className="text-gray-600 font-semibold">{t("about.institution")}</p>
                        <p className="text-sm text-gray-500 font-medium mt-1">2023 - 2025</p>
                      </div>
                    </div>

                    <div className="h-px bg-gray-200"></div>

                    {/* Secondary Education */}
                    <div className="relative pl-6 border-l-4 border-teal-600">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-teal-600 border-4 border-white shadow-md"></div>
                      <div className="mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">{t("about.secondaryDegree")}</h4>
                        <p className="text-gray-600 font-semibold">{t("about.secondaryInstitution")}</p>
                        <p className="text-sm text-gray-500 font-medium mt-1">2017 - 2022</p>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mt-8 pt-6 border-t-2 border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">{t("about.languages")}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                        <span className="font-semibold text-gray-800">🇦🇷 {t("about.spanish")}</span>
                        <span className="text-sm font-bold text-gray-600">{t("about.native")}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                        <span className="font-semibold text-gray-800">🇬🇧 {t("about.english")}</span>
                        <span className="text-sm font-bold text-gray-600">{t("about.advanced")}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
