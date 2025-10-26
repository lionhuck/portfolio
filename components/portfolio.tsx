"use client"

import Header from "./header"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import ExperienceSection from "./experience-section"
import ProjectsSection from "./projects-section"
import SkillsSection from "./skills-section"
import AIChatSection from "./ai-chat-section"
import ContactSection from "./contact-section"
import Footer from "./footer"
import { LanguageProvider } from "@/contexts/language-context"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AIChatSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
