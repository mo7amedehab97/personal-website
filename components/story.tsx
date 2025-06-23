"use client"

import { AnimateInView } from "./animate-in-view"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { ResumeButton } from "./resume-button"

export function Story() {
  const t = useTranslations("story")
  const { direction } = useLanguage()

  return (
    <section id="story" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateInView animation="fadeIn">
            <div className="mb-8 text-center">
              <blockquote className={cn("italic text-xl md:text-2xl mb-4", direction === "rtl" && "font-arabic")}>
                {t("quote")}
              </blockquote>
              <h2 className={cn("section-title", direction === "rtl" && "font-arabic")}>{t("title")}</h2>
            </div>
          </AnimateInView>

          <div className="space-y-4 body-text">
            {t.raw("paragraphs").map((paragraph: string, index: number) => (
              <AnimateInView key={index} animation="slideUp" delay={0.1 * index}>
                <p className={cn(direction === "rtl" && "font-arabic")}>{paragraph}</p>
              </AnimateInView>
            ))}
          </div>

          <AnimateInView animation="fadeIn" delay={0.5}>
            <div className="mt-8 text-center">
              <ResumeButton />
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

