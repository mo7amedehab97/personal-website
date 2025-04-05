"use client"

import { Mail, Linkedin, Github, Phone } from "lucide-react"
import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { ResumeButton } from "./resume-button"

export function Contact() {
  const t = useTranslations("contact")
  const { direction } = useLanguage()

  const contactItems = [
    {
      icon: <Mail className="w-8 h-8 mb-4" />,
      title: t("email"),
      value: "mohamed.helles.dev@gmail.com",
      href: "mailto:mohamed.helles.dev@gmail.com",
    },
    {
      icon: <Linkedin className="w-8 h-8 mb-4" />,
      title: t("linkedin"),
      value: "linkedin.com/in/mohamed-helles",
      href: "https://www.linkedin.com/in/mohamed-helles",
    },
    {
      icon: <Github className="w-8 h-8 mb-4" />,
      title: t("github"),
      value: "github.com/mo7amedehab97",
      href: "https://github.com/mo7amedehab97",
    },
    {
      icon: <Phone className="w-8 h-8 mb-4" />,
      title: t("phone"),
      value: "+(972) 595514207",
      href: "tel:+972595514207",
    },
  ]

  return (
    <section id="contacts" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateInView animation="fadeIn">
            <h2 className={cn("section-title mb-8", direction === "rtl" && "font-arabic")}>{t("title")}</h2>
          </AnimateInView>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactItems.map((item, index) => (
              <AnimateInView key={index} animation="slideUp" delay={0.1 * index}>
                <motion.div
                  className="p-6 bg-secondary rounded-lg flex flex-col items-center h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className={cn("font-heading text-lg mb-2", direction === "rtl" && "font-arabic")}>
                    {item.title}
                  </h3>
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.value}
                  </motion.a>
                </motion.div>
              </AnimateInView>
            ))}
          </div>

          <AnimateInView animation="fadeIn" delay={0.5}>
            <ResumeButton className="mx-auto" />
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

