"use client"

import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function SpecialSkills() {
  const t = useTranslations("specialSkills")
  const { direction } = useLanguage()

  const specialSkills = [
    {
      title: t("skills.3dweb.name"),
      description: t("skills.3dweb.description"),
      color: "#44CF6C",
      icon: "🌐",
    },
    {
      title: t("skills.animation.name"),
      description: t("skills.animation.description"),
      color: "#FF4D4D",
      icon: "✨",
    },
    {
      title: t("skills.react.name"),
      description: t("skills.react.description"),
      color: "#61DAFB",
      icon: "⚛️",
    },
    {
      title: t("skills.typescript.name"),
      description: t("skills.typescript.description"),
      color: "#3178C6",
      icon: "TS",
    },
    {
      title: t("skills.nextjs.name"),
      description: t("skills.nextjs.description"),
      color: "#000000",
      icon: "N",
    },
  ]

  return (
    <section id="special-skills" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className={cn("section-title text-center mb-8", direction === "rtl" && "font-arabic")}>{t("title")}</h2>
          <p
            className={cn(
              "text-center text-muted-foreground max-w-2xl mx-auto mb-8",
              direction === "rtl" && "font-arabic",
            )}
          >
            {t("intro")}
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specialSkills.map((skill, index) => (
            <AnimateInView key={index} animation="slideUp" delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="bg-primary border-secondary h-full">
                  <CardHeader
                    style={{ borderBottom: `3px solid ${skill.color}` }}
                    className="flex flex-row items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-secondary flex items-center justify-center text-xl">
                      {skill.icon}
                    </div>
                    <CardTitle className={cn("text-lg", direction === "rtl" && "font-arabic")}>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className={cn("text-muted-foreground", direction === "rtl" && "font-arabic")}>
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView animation="fadeIn" delay={0.4}>
          <div className="mt-8 text-center">
            <p className={cn("text-muted-foreground max-w-2xl mx-auto", direction === "rtl" && "font-arabic")}>
              {t("note")}
            </p>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}

