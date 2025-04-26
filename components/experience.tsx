"use client"

import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Experience() {
  const t = useTranslations("experience")
  const { direction } = useLanguage()

  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className={cn("section-title text-center mb-12", direction === "rtl" && "font-arabic")}>
            {t("title")}
          </h2>
        </AnimateInView>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary"></div>

            {t.raw("experiences").map((exp, index) => (
              <AnimateInView
                key={exp.id}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={0.2 * index}
                className="mb-12"
              >
                <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
                  ></motion.div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <motion.div
                      className="glass-card p-6 rounded-lg shadow-lg hover:bg-black/20 transition-all duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className={cn("text-xl font-heading font-bold mb-1", direction === "rtl" && "font-arabic")}>
                        {exp.role}
                      </h3>
                      <h4 className={cn("text-lg font-heading mb-2", direction === "rtl" && "font-arabic")}>
                        {exp.company}
                      </h4>

                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar size={14} className="mr-1" />
                        <span className={cn(direction === "rtl" && "font-arabic")}>{exp.period}</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin size={14} className="mr-1" />
                        <span className={cn(direction === "rtl" && "font-arabic")}>{exp.location}</span>
                      </div>

                      <ul className={cn("list-disc pl-5 space-y-2 text-sm", direction === "rtl" && "pr-5 pl-0")}>
                        {exp.description.map((item, i) => (
                          <li key={i} className={cn(direction === "rtl" && "font-arabic")}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

