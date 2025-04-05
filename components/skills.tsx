"use client"
import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Skills() {
  const t = useTranslations("skills")
  const { direction } = useLanguage()

  const skills = [
    { name: "REACT JS", icon: "⚛️" },
    { name: "NEXT.JS", icon: "N" },
    { name: "TYPESCRIPT", icon: "TS" },
    { name: "JAVASCRIPT", icon: "JS" },
    { name: "HTML", icon: "5" },
    { name: "CSS", icon: "🎨" },
    { name: "TAILWIND", icon: "TW" },
    { name: "NODE.JS", icon: "🟢" },
    { name: "EXPRESS.JS", icon: "EX" },
    { name: "REACT NATIVE", icon: "📱" },
    { name: "MONGODB", icon: "🍃" },
    { name: "POSTGRES", icon: "🐘" },
  ]

  const additionalSkills = [
    "BOOTSTRAP",
    "ANT DESIGN",
    "MATERIAL UI",
    "SHADCN UI",
    "REACT QUERY",
    "REACT HOOK FORM",
    "ZOD",
    "SOCKET.IO",
    "CYPRESS",
    "JEST",
    "TAPE",
    "JOI",
    "FIGMA",
    "GIT & GITHUB",
    "VERCEL",
    "HEROKU",
    "NETLIFY",
    "RENDER",
  ]

  return (
    <section id="skills" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateInView animation="fadeIn">
            <h2 className={cn("section-title text-center mb-12", direction === "rtl" && "font-arabic")}>
              {t("title")}
            </h2>
          </AnimateInView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {skills.map((skill, index) => (
              <AnimateInView key={skill.name} animation="scale" delay={0.05 * index}>
                <motion.div
                  className="flex items-center p-3 bg-primary rounded-md"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-secondary rounded-md mr-3"
                    whileHover={{ rotate: 10 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              </AnimateInView>
            ))}
          </div>

          <AnimateInView animation="fadeIn" delay={0.3}>
            <div>
              <h3 className={cn("text-center text-sm mb-4", direction === "rtl" && "font-arabic")}>
                {t("additionalSkills")}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {additionalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary rounded-md text-xs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + 0.05 * index }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "var(--accent)",
                      color: "var(--primary)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

