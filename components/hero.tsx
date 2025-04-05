"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smooth-scroll"
import { Github, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Hero() {
  const t = useTranslations("hero")
  const { direction } = useLanguage()

  return (
    <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className={cn("order-2 md:order-1", direction === "rtl" && "md:order-2")}
            initial={{ opacity: 0, x: direction === "rtl" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className={cn(
                "font-heading text-4xl md:text-5xl lg:text-7xl font-medium mb-4",
                direction === "rtl" && "font-arabic",
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: direction === "rtl" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("title1")}
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: direction === "rtl" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t("title2")}
              </motion.span>
            </motion.h1>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <blockquote className={cn("italic text-muted-foreground", direction === "rtl" && "font-arabic")}>
                {t("quote")}
                <cite className="block mt-2">{t("quoteAuthor")}</cite>
              </blockquote>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className={cn("text-xl md:text-2xl mb-4", direction === "rtl" && "font-arabic")}>{t("greeting")}</h2>
              <p className={cn("body-text mb-4", direction === "rtl" && "font-arabic")}>{t("intro1")}</p>
              <p className={cn("body-text", direction === "rtl" && "font-arabic")}>{t("intro2")}</p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button
                className="bg-accent text-primary hover:bg-accent/80 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("contacts")}
              >
                <span className={cn(direction === "rtl" && "font-arabic")}>{t("getInTouch")}</span>
              </Button>
              <Button
                variant="outline"
                className="transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("story")}
              >
                <span className={cn(direction === "rtl" && "font-arabic")}>{t("learnMore")}</span>
              </Button>
              <div className="flex gap-2 ml-2 flipped:mr-2 flipped:ml-0">
                <motion.a
                  href="https://github.com/mo7amedehab97"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-secondary rounded-full"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohamed-helles"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-secondary rounded-full"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={cn("order-1 md:order-2 flex justify-center", direction === "rtl" && "md:order-1")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/mohamed-profile.png"
                alt="Mohamed Helles"
                fill
                className="object-cover rounded-full"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full border border-accent/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-1"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <motion.div
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p
          className={cn("text-xs text-muted-foreground mt-2", direction === "rtl" && "font-arabic")}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {t("scrollDown")}
        </motion.p>
      </motion.div>
    </section>
  )
}

