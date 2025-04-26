"use client"

import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { Calendar, GraduationCap, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

interface EducationItem {
  id: number
  type: string
  title: string
  period: string
  description?: string
  details: string[]
}

export function Education() {
  const t = useTranslations("education")
  const { direction } = useLanguage()

  const education: EducationItem[] = [
    {
      id: 1,
      type: "education",
      title: t("gazaSkyGeeks.title"),
      period: t("gazaSkyGeeks.period"),
      description: t("gazaSkyGeeks.description"),
      details: t.raw("gazaSkyGeeks.details"),
    },
  ]

  const courses: EducationItem[] = [
    {
      id: 1,
      type: "course",
      title: t("reactNative.title"),
      period: t("reactNative.period"),
      details: t.raw("reactNative.details"),
    },
    {
      id: 2,
      type: "course",
      title: t("reactTypescript.title"),
      period: t("reactTypescript.period"),
      details: t.raw("reactTypescript.details"),
    },
  ]

  return (
    <section id="education" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className={cn("section-title text-center mb-12", direction === "rtl" && "font-arabic")}>
            {t("title")}
          </h2>
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <AnimateInView animation="fadeIn" delay={0.1}>
              <h3 className={cn("text-xl font-heading font-bold mb-6 flex items-center", direction === "rtl" && "font-arabic")}>
                <GraduationCap className={cn("mr-2", direction === "rtl" && "ml-2 mr-0")} /> {t("education")}
              </h3>
            </AnimateInView>

            {education.map((item, index) => (
              <AnimateInView key={item.id} animation="slideUp" delay={0.2 + 0.1 * index}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-primary border-secondary mb-4">
                    <CardHeader>
                      <CardTitle className={cn("text-lg", direction === "rtl" && "font-arabic")}>{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className={cn("mr-1", direction === "rtl" && "ml-1 mr-0")} />
                        <span className={cn(direction === "rtl" && "font-arabic")}>{item.period}</span>
                      </div>
                      <div className={cn("text-accent font-medium", direction === "rtl" && "font-arabic")}>
                        {item.description}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={cn("list-disc pl-5 space-y-2 text-sm", direction === "rtl" && "pr-5 pl-0")}>
                        {item.details.map((detail: string, i: number) => (
                          <li key={i} className={cn(direction === "rtl" && "font-arabic")}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimateInView>
            ))}
          </div>

          <div>
            <AnimateInView animation="fadeIn" delay={0.1}>
              <h3 className={cn("text-xl font-heading font-bold mb-6 flex items-center", direction === "rtl" && "font-arabic")}>
                <BookOpen className={cn("mr-2", direction === "rtl" && "ml-2 mr-0")} /> {t("courses")}
              </h3>
            </AnimateInView>

            {courses.map((item, index) => (
              <AnimateInView key={item.id} animation="slideUp" delay={0.2 + 0.1 * index}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-primary border-secondary mb-4">
                    <CardHeader>
                      <CardTitle className={cn("text-lg", direction === "rtl" && "font-arabic")}>{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className={cn("mr-1", direction === "rtl" && "ml-1 mr-0")} />
                        <span className={cn(direction === "rtl" && "font-arabic")}>{item.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={cn("list-disc pl-5 space-y-2 text-sm", direction === "rtl" && "pr-5 pl-0")}>
                        {item.details.map((detail: string, i: number) => (
                          <li key={i} className={cn(direction === "rtl" && "font-arabic")}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

