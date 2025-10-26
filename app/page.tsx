"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import Portfolio from "@/components/portfolio"

export default function Home() {
  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0)
  }, [])

  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
