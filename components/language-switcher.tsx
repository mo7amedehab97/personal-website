"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useEffect, useState } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("language")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLocale = language === "en" ? "ar" : "en"
    // Update the language in context
    setLanguage(newLocale)
    // Update the URL
    const newPath = pathname.replace(/^\/(en|ar)/, `/${newLocale}`)
    router.push(newPath)
  }

  if (!isMounted) {
    return null
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex items-center gap-1">
        <Globe size={14} />
        <span>{language === "en" ? "AR" : "EN"}</span>
      </Button>
    </motion.div>
  )
}

