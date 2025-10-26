"use client"

import { Code2, Database, Wrench, Layout } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.backend"),
      icon: Code2,
      skills: ["Python", "Flask", "Django", "Node.js", "REST APIs", "JWT Authentication"],
      gradient: "from-blue-600 to-blue-800",
      iconBg: "bg-blue-600",
    },
    {
      title: t("skills.frontend"),
      icon: Layout,
      skills: ["JavaScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      gradient: "from-teal-600 to-teal-800",
      iconBg: "bg-teal-600",
    },
    {
      title: t("skills.databases"),
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Database Design", "SQL Optimization"],
      gradient: "from-slate-700 to-slate-900",
      iconBg: "bg-slate-700",
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "AWS", "VirtualBox", "Postman", "Jira", "Figma", "GitHub Actions"],
      gradient: "from-gray-700 to-gray-900",
      iconBg: "bg-gray-700",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">{t("skills.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`${category.iconBg} p-3 rounded-lg shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                      >
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
