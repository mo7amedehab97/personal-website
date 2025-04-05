"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { FileDown } from "lucide-react"

export function ResumeButton({ className }: { className?: string }) {
  const t = useTranslations("story")
  const { direction } = useLanguage()

  const handleDownload = () => {
    // Google Docs export as PDF link
    window.open(
      "https://docs.google.com/document/d/1w48fMagsu5Q-0ke_uPLfjrbDDrf5Hks1e60MtmrBqSE/export?format=pdf",
      "_blank",
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
      <Button
        className="bg-accent text-primary hover:bg-accent/80 transition-all duration-300 flex items-center gap-2"
        onClick={handleDownload}
      >
        <FileDown size={16} />
        <span className={cn(direction === "rtl" && "font-arabic")}>{t("getResume")}</span>
      </Button>
    </motion.div>
  )
}

