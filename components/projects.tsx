"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    key: "job360",
    tech: "REACT JS, REACT HOOK FORM, ZOD, FRAMER MOTION, SOCKET.IO",
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    key: "scopal",
    tech: "NEXT.JS 14, TYPESCRIPT, TAILWIND, SHADCN UI, REACT QUERY",
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    key: "powerlook",
    tech: "EXPRESS.JS, NEXT.JS, SOCKET.IO, FULL CALENDAR",
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: "#",
    demoUrl: null,
  },
]

export function Projects() {
  const t = useTranslations("projects")
  const { direction } = useLanguage()

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className={cn("section-title text-center mb-12", direction === "rtl" && "font-arabic")}>
            {t("title")}
          </h2>
        </AnimateInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateInView key={project.id} animation="slideUp" delay={0.1 * index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="bg-secondary border-secondary h-full flex flex-col overflow-hidden">
                  <CardHeader className="pb-2">
                    <motion.div
                      className="relative w-full h-48 mb-4 overflow-hidden rounded-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={t(`projects.${project.key}.title`)}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </motion.div>
                    <CardTitle className={cn("font-heading text-xl", direction === "rtl" && "font-arabic")}>
                      {t(`projects.${project.key}.title`)}
                    </CardTitle>
                    <CardDescription className={cn("text-xs text-muted-foreground", direction === "rtl" && "font-arabic")}>
                      {t("tech")}: {project.tech}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className={cn("text-sm text-muted-foreground", direction === "rtl" && "font-arabic")}>
                      {t(`projects.${project.key}.description`)}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {t("github")}
                        </a>
                      </Button>
                    </motion.div>
                    {project.demoUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {t("demo")}
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

