"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Footer() {
  const t = useTranslations("footer")
  const { direction } = useLanguage()

  return (
    <footer className="py-6 border-t border-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className={cn("text-sm text-muted-foreground", direction === "rtl" && "font-arabic")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.rich("copyright", { year: new Date().getFullYear() })}
        </motion.p>
      </div>
    </footer>
  )
}

