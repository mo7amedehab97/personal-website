"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Instructions({ setShowInstructions }) {
  const t = useTranslations("specialSkills")
  const { direction } = useLanguage()

  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center justify-center bg-primary/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-secondary p-6 rounded-lg max-w-md text-center">
        <h3 className={cn("text-xl font-heading font-bold mb-4", direction === "rtl" && "font-arabic")}>
          {t("howToInteract")}
        </h3>
        <ul
          className={cn(
            "list-disc text-left pl-5 mb-6 space-y-2",
            direction === "rtl" && "font-arabic text-right pr-5 pl-0",
          )}
        >
          {t.raw("instructions").map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <Button onClick={() => setShowInstructions(false)} className="bg-accent text-primary hover:bg-accent/80">
          <span className={cn(direction === "rtl" && "font-arabic")}>{t("startExploring")}</span>
        </Button>
      </div>
    </motion.div>
  )
}

