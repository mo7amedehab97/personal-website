"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"
type Direction = "ltr" | "rtl"

interface LanguageContextType {
  language: Language
  direction: Direction
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLocale = "en",
}: { children: React.ReactNode; initialLocale?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLocale)
  const [direction, setDirection] = useState<Direction>(initialLocale === "ar" ? "rtl" : "ltr")
  const [isClient, setIsClient] = useState(false)

  // This effect runs only on the client side
  useEffect(() => {
    setIsClient(true)

    // Try to get language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    } else {
      // Check browser language
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "ar") {
        setLanguageState("ar")
      }
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Set direction based on language
    setDirection(language === "ar" ? "rtl" : "ltr")

    // Save language preference to localStorage
    localStorage.setItem("language", language)

    // Set direction attribute on html element
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"

    // Set lang attribute on html element
    document.documentElement.lang = language
  }, [language, isClient])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return <LanguageContext.Provider value={{ language, direction, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

