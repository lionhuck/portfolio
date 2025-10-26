"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, Building2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ExperienceSection() {
  const { t, language } = useLanguage()

  const experiences = [
    {
      title: language === "en" ? "Python Backend Developer" : "Desarrollador Backend Python",
      company: "iTecLabs",
      period: language === "en" ? "April 2024 - Present" : "Abril 2024 - Presente",
      type: language === "en" ? "Part-time · Hybrid" : "Medio tiempo · Híbrido",
      location: "Argentina",
      description:
        language === "en"
          ? "Actively working on the development of a comprehensive management system for an educational institution. Building robust backend solutions using Python and Django, implementing PostgreSQL databases, and managing version control with Git and GitHub Actions for CI/CD automation."
          : "Trabajando activamente en el desarrollo de un sistema de gestión integral para una institución educativa. Construyendo soluciones backend robustas usando Python y Django, implementando bases de datos PostgreSQL, y gestionando control de versiones con Git y GitHub Actions para automatización CI/CD.",
      technologies: ["Python", "Django", "PostgreSQL", "Git", "GitHub Actions"],
      current: true,
    },
    {
      title: language === "en" ? "Product Owner & Software Management" : "Product Owner y Gestión de Software",
      company: "Terra Ingeniería",
      period: language === "en" ? "Nov 2023 - Dec 2024" : "Nov 2023 - Dic 2024",
      type: language === "en" ? "Full-time" : "Tiempo completo",
      location: "Argentina",
      description:
        language === "en"
          ? "Analyzed client needs and translated them into functional system requirements. Led product strategy by prioritizing tasks and features, coordinated effectively with the development team to ensure timely delivery, and validated system updates to maintain high quality standards."
          : "Analicé necesidades de clientes y las traduje en requisitos funcionales del sistema. Lideré la estrategia del producto priorizando tareas y funcionalidades, coordiné efectivamente con el equipo de desarrollo para asegurar entregas a tiempo, y validé actualizaciones del sistema para mantener altos estándares de calidad.",
      technologies: ["Product Management", "Agile", "JIRA", "Stakeholder Management"],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-slate-900">{t("experience.title")}</h2>
                <p className="text-slate-600 mt-1">
                  {language === "en" ? "My professional journey" : "Mi trayectoria profesional"}
                </p>
              </div>
            </div>
            <div className="w-24 h-1 bg-slate-900 rounded-full"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-2xl bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Top bar indicator */}
                  <div className="h-1 bg-slate-200 group-hover:bg-slate-900 transition-colors duration-300"></div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-12 h-12 bg-slate-100 group-hover:bg-slate-900 rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                            <Building2 className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-xl font-semibold text-slate-700">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Current Badge */}
                      {exp.current && (
                        <Badge className="bg-slate-900 text-white hover:bg-slate-800 border-0 px-4 py-1.5 text-sm font-medium">
                          {language === "en" ? "Current Position" : "Posición Actual"}
                        </Badge>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500">·</span>
                        <span className="text-sm font-medium">{exp.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-base">{exp.description}</p>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {language === "en" ? "Technologies & Tools" : "Tecnologías y Herramientas"}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
