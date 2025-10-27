"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Monitor } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function ProjectsSection() {
  const { t, language } = useLanguage()

  const projects = [
    {
      title: "CAR MEETING",
      subtitle: language === "en" ? "Ridesharing App" : "App de Viajes Compartidos",
      description:
        language === "en"
          ? "Full-stack web application that connects drivers and passengers with shared routes. Features email verification, password recovery, real-time booking system, integrated chat functionality, and comprehensive user rating system."
          : "Aplicación web full-stack que conecta conductores y pasajeros con rutas compartidas. Incluye verificación de email, recuperación de contraseña, sistema de reservas en tiempo real, chat integrado y sistema completo de calificaciones.",
      stack: ["Flask", "React", "PostgreSQL", "AWS EC2/RDS", "JWT", "WebSocket"],
      links: {
        frontend: "https://github.com/lionhuck/car_meeting_react",
        backend: "https://github.com/lionhuck/car_meeting",
        live: "https://carmeeting.online/",
      },
      gradient: "from-blue-700 to-teal-700",
      bgDark: "from-slate-800 to-slate-900",
      image: "/projects/car-meeting.png",

    },
    {
      title: "TIENDE O NO?",
      subtitle: language === "en" ? "Weather Check App" : "Consulta del Clima",
      description:
        language === "en"
          ? "Smart weather application that helps users decide if it's a good day to hang clothes outside. Built with Next.js and integrated with OpenWeatherMap API for real-time weather data. Features responsive design and an AI-generated interface with custom optimizations."
          : "Aplicación inteligente del clima que ayuda a los usuarios a decidir si es un buen día para tender ropa afuera. Construida con Next.js e integrada con la API de OpenWeatherMap para datos meteorológicos en tiempo real. Cuenta con diseño responsive e interfaz generada con IA con optimizaciones personalizadas.",
      stack: ["Next.js", "OpenWeatherMap API", "Vercel", "Tailwind CSS", "TypeScript"],
      links: {
        github: "https://github.com/lionhuck/tiende_o_no",
        live: "https://v0-openweathermap-api.vercel.app/",
      },
      gradient: "from-green-700 to-teal-700",
      bgDark: "from-slate-800 to-slate-900",
      image: "/projects/tiende-o-no.png",
    },
  ]

return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 px-4 py-2 rounded-full mb-4 border border-blue-500/30">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Featured Work</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-4">{t("projects.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Lista de proyectos */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`border-0 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden bg-gradient-to-br ${project.bgDark}`}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Imagen del proyecto */}
                    <div className="relative h-64 md:h-full bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden group">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Monitor className="w-16 h-16 text-gray-500" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70"></div>
                      <div
                        className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full shadow-lg`}
                      >
                        <span className="text-white font-bold text-sm">Featured</span>
                      </div>
                    </div>

                    {/* Info del proyecto */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3
                          className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-400 font-semibold text-lg">{project.subtitle}</p>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 text-base">{project.description}</p>

                      <div className="mb-6">
                        <p className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-slate-700/50 backdrop-blur-sm text-gray-200 rounded-lg text-sm font-semibold border border-slate-600 shadow-md hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.links.frontend && (
                          <Button
                            variant="outline"
                            className="bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 border-2 border-slate-600 hover:border-blue-500 text-gray-200 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open(project.links.frontend, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Frontend
                          </Button>
                        )}
                        {project.links.backend && (
                          <Button
                            variant="outline"
                            className="bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 border-2 border-slate-600 hover:border-green-500 text-gray-200 hover:text-white hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open(project.links.backend, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Backend
                          </Button>
                        )}
                        {project.links.github && !project.links.frontend && (
                          <Button
                            variant="outline"
                            className="bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 border-2 border-slate-600 hover:border-gray-400 text-gray-200 hover:text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open(project.links.github, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {t("projects.viewCode")}
                          </Button>
                        )}
                        {project.links.live && (
                          <Button
                            className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 font-semibold`}
                            onClick={() => window.open(project.links.live, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t("projects.viewLive")}
                          </Button>
                        )}
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