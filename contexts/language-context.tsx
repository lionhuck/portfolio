"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface Translations {
  [key: string]: {
    en: string
    es: string
  }
}

const translations: Translations = {
  // Hero Section
  "hero.available": {
    en: "Available for opportunities",
    es: "Disponible para oportunidades",
  },
  "hero.subtitle": {
    en: "Full Stack Developer passionate about learning and teamwork",
    es: "Desarrollador Full Stack apasionado por aprender y el trabajo en equipo",
  },
  "hero.cta": {
    en: "Get In Touch",
    es: "Contactar",
  },
  "hero.viewWork": {
    en: "View My Work",
    es: "Ver Mi Trabajo",
  },
  "hero.photoPlaceholder": {
    en: "Your Professional Photo Here",
    es: "Tu Foto Profesional Aquí",
  },

  // About Section
  "about.title": {
    en: "About Me",
    es: "Sobre Mí",
  },
  "about.description": {
    en: "Hey! I'm León, Full Stack Developer.\n\nSince I was a kid, I've always been fascinated by everything that happens inside a computer. My dad was a systems analyst and would explain programming concepts to me when floppy disks were still a thing. Maybe they're not useful anymore, but thanks to those moments, my curiosity about understanding how machines think was born... and how to make them speak my language.\n\nOver time, that curiosity turned into passion. Today I work with Python (Django, Flask) and JavaScript (Node.js, React, Next.js), creating projects that combine logic, design, and purpose. I love when an idea starts as a line of code and ends up becoming something other people can use, enjoy, or learn from.\n\nMore than just developing, I like building things that make sense—that work well, but also connect with people. And every new challenge is the perfect excuse to keep learning something new.",
    es: "Hey! Soy León, Full Stack Developer.\n\nDesde chico siempre me fascinó todo lo que pasaba dentro de una computadora. Mi papá era analista de sistemas y me explicaba cosas sobre programación cuando todavía se usaban disquetes. Tal vez hoy ya no sirvan para mucho, pero gracias a esos momentos nació mi curiosidad por entender cómo piensan las máquinas… y cómo lograr que hablen mi mismo idioma.\n\nCon el tiempo, esa curiosidad se transformó en pasión. Hoy trabajo con Python (Django, Flask) y JavaScript (Node.js, React, Next.js), creando proyectos que combinan lógica, diseño y propósito. Me encanta cuando una idea empieza siendo una línea de código y termina convirtiéndose en algo que otras personas pueden usar, disfrutar o aprender de ello.\n\nMás que solo desarrollar, me gusta construir cosas que tengan sentido —que funcionen bien, pero también que conecten con las personas. Y cada nuevo desafío es una excusa perfecta para seguir aprendiendo algo nuevo.",
  },
  "about.fullStack": {
    en: "Full Stack",
    es: "Full Stack",
  },
  "about.fullStackDescription": {
    en: "Python, Django, Flask, JS, React, Node",
    es: "Python, Django, Flask, JS, React, Node",
  },
  "about.curious": {
    en: "Always Learning",
    es: "Siempre Aprendiendo",
  },
  "about.curiousDescription": {
    en: "Curious about new tech trends",
    es: "Curioso sobre nuevas tecnologías",
  },
  "about.teamPlayer": {
    en: "Team Player",
    es: "Trabajo en Equipo",
  },
  "about.teamDescription": {
    en: "I enjoy working in teams and collaborating",
    es: "Me gusta trabajar en equipo y colaborar",
  },
  "about.problemSolver": {
    en: "Problem Solver",
    es: "Resolución de Problemas",
  },
  "about.problemSolverDescription": {
    en: "Practical and solution-oriented approach",
    es: "Enfoque práctico y orientado a soluciones",
  },
  "about.education": {
    en: "Education",
    es: "Educación",
  },
  "about.degree": {
    en: "Software Development",
    es: "Desarrollo de Software",
  },
  "about.institution": {
    en: "Río Cuarto Technological Institute",
    es: "Instituto Tecnológico de Río Cuarto",
  },
  "about.certificate.title": {
  "en": "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
  "es": "Construir aplicaciones de IA con ChatGPT, Dall-E y GPT-4"
  },
  "about.certificate.platform": {
    "en": "Scrimba / Coursera",
    "es": "Scrimba / Coursera"
  },
  "about.certificate.date": {
    "en": "Completed on October 13, 2025",
    "es": "Completado el 13 de octubre de 2025"
  },
  "about.certificate.description": {
    "en": "Course focused on developing applications with OpenAI APIs, prompt engineering, web deployment, and best practices in generative AI.",
    "es": "Curso enfocado en desarrollo de aplicaciones con APIs de OpenAI, ingeniería de prompts, despliegue web y buenas prácticas en IA generativa."
  },
  "about.certificate.verify": {
    "en": "Verify certificate",
    "es": "Verificar certificado"
  },
  "about.certifications": {
    en: "Certificates",
    es: "Certificados",
  },
  "about.secondaryDegree": {
    en: "Secondary Education",
    es: "Educación Secundaria",
  },
  "about.secondaryInstitution": {
    en: "Leonardo Da Vinci High School",
    es: "Colegio Secundario Leonardo Da Vinci",
  },
  "about.languages": {
    en: "Languages",
    es: "Idiomas",
  },
  "about.spanish": {
    en: "Spanish",
    es: "Español",
  },
  "about.english": {
    en: "English",
    es: "Inglés",
  },
  "about.native": {
    en: "Native",
    es: "Nativo",
  },
  "about.advanced": {
    en: "Advanced (B2)",
    es: "Avanzado (B2)",
  },

  // Experience Section
  "experience.title": {
    en: "Work Experience",
    es: "Experiencia Laboral",
  },

  // Projects Section
  "projects.title": {
    en: "Featured Projects",
    es: "Proyectos Destacados",
  },
  "projects.viewCode": {
    en: "View Code",
    es: "Ver Código",
  },
  "projects.viewLive": {
    en: "View Live",
    es: "Ver en Vivo",
  },

  // Skills Section
  "skills.title": {
    en: "Technical Skills",
    es: "Habilidades Técnicas",
  },
  "skills.backend": {
    en: "Backend",
    es: "Backend",
  },
  "skills.frontend": {
    en: "Frontend",
    es: "Frontend",
  },
  "skills.databases": {
    en: "Databases",
    es: "Bases de Datos",
  },
  "skills.tools": {
    en: "Tools & DevOps",
    es: "Herramientas y DevOps",
  },

  // AI Chat Section
  "chat.title": {
    en: "Ask Me Anything",
    es: "Pregúntame lo que quieras",
  },
  "chat.subtitle": {
    en: "Chat with my AI assistant",
    es: "Chatea con mi asistente IA",
  },
  "chat.placeholder": {
    en: "Type your message...",
    es: "Escribe tu mensaje...",
  },
  "chat.send": {
    en: "Send",
    es: "Enviar",
  },
  "chat.welcome": {
    en: "Hi! I'm León's AI assistant. Ask me anything about his experience, skills, or projects!",
    es: "¡Hola! Soy el asistente IA de León. ¡Pregúntame lo que quieras sobre su experiencia, habilidades o proyectos!",
  },

  // Contact Section
  "contact.title": {
    en: "Let's Connect",
    es: "Conectemos",
  },
  "contact.subtitle": {
    en: "I'm always open to discussing new opportunities and interesting projects",
    es: "Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes",
  },
  "contact.email": {
    en: "Email",
    es: "Correo",
  },
  "contact.sendEmail": {
    en: "Send Email",
    es: "Enviar Email",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  "footer.madeWith": {
    en: "Made with",
    es: "Hecho con",
  },
  "footer.by": {
    en: "by",
    es: "por",
  },

  // Navigation
  "nav.about": {
    en: "About",
    es: "Sobre Mí",
  },
  "nav.experience": {
    en: "Experience",
    es: "Experiencia",
  },
  "nav.projects": {
    en: "Projects",
    es: "Proyectos",
  },
  "nav.skills": {
    en: "Skills",
    es: "Habilidades",
  },
  "nav.chat": {
    en: "Chat",
    es: "Chat",
  },
  "nav.contact": {
    en: "Contact",
    es: "Contacto",
  },
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
