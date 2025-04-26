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
import scobal from "../public/images/scobal.png"
import job360 from "../public/images/job360.png"
import zahran from "../public/images/zahran.png"
import qahttan from "../public/images/qahttan.png"
import amjad from "../public/images/amjad.png"
import buildcon from "../public/images/buildcon.png"
import metaverse from "../public/images/metaverse.png"
import gorco from "../public/images/gorco.png"
import aidex from "../public/images/aidex.png"
import sorati from "../public/images/sorati.png"
import { useState } from "react"

const projects = [

  {
    id: 2,
    key: "scopal",
    tech: "NEXT 14, TYPESCRIPT, TAILWIND, SHADCN UI, REACT QUERY, OPEN AI",
    image: scobal,
    githubUrl: null,
    demoUrl: "http://scopal-stage-guousr1hduqx-1298409234.us-east-2.elb.amazonaws.com/",
  },
{
  id: 3,
  key: "sorati",
  tech: "REACT JS,React Drag and Drop, REACT HOOK FORM, ZOD, FRAMER MOTION.",
  image: sorati,
  githubUrl: null,
  demoUrl: null,
  },
  {
    id: 4,
    key: "zahran",
    tech: "NEXT JS, FRAMER MOTION, STYLED COMPONENTS, TAILWIND CSS,",
    image: zahran,
    githubUrl: "https://github.com/mo7amedehab97/Zahran-",
    demoUrl: "https://zahran-beta.vercel.app/",
  },
  {
    id: 5,
    key: "qahttan",
    tech: "REACT JS, TAILWIND CSS, FRAMER MOTION.",
    image: qahttan,
    githubUrl: "https://github.com/mo7amedehab97/Qahttan",
    demoUrl: "https://qahttan.vercel.app/",
  },
  {
    id: 1,
    key: "job360",
    tech: "REACT JS, REACT HOOK FORM, ZOD, FRAMER MOTION, SCSS, TAILWIND CSS, STYLED COMPONENTS, REACT RC, VEDEO RECORDING, OPEN AI,",
    image: job360,
    githubUrl: null,
    demoUrl: "https://job360.co.il/",
  },
  {
    id: 6,
    key: "amjad",
    tech: "REACT JS, FRAMER MOTION, STYLED COMPONENTS.",
    image: amjad,
    githubUrl: "https://amjad-ghanima.vercel.app/",
    demoUrl: "https://amjad-ghanima.vercel.app/",
  },
  {
    id: 7,
    key: "buildcon",
    tech: "REACT JS, STYLE CSS, ANIMATION,",
    image: buildcon,
    githubUrl: "https://github.com/mo7amedehab97/landing-page",
    demoUrl: "https://landing-page-steel-nine.vercel.app/",
  },
  {
    id: 8,
    key: "metaverse",
    tech: "NEXT TYPESCRIPT, THREE JS, TAILWIND CSS,",
    image: metaverse,
    githubUrl: "https://github.com/mo7amedehab97/web3-landing-page",
    demoUrl: "http://web3-landing-page.vercel.app/",
  },
  {
    id: 9,
    key: "gorco",
    tech: "HTML, CSS, JAVASCRIPT",
    image: gorco,
    githubUrl: "https://github.com/mo7amedehab97/groco-shop",
    demoUrl: "https://mo7amedehab97.github.io/groco-shop/",
  },
  {
    id: 10,
    key: "aidex",
    tech: "REACT JS, REACT HOOK FORM, ZOD, FRAMER MOTION, SOCKET.IO",
    image: aidex,
    githubUrl: "https://github.com/mo7amedehab97/Aidex",
    demoUrl: "https://aidex.vercel.app/",
  },
  {
    id: 3,
    key: "powerlook",
    tech: "EXPRESS.JS, NEXT.JS, SOCKET.IO, FULL CALENDAR PACKAGE",
    image: "/placeholder.svg?height=300&width=500",
    githubUrl: null,
    demoUrl: null,
  },
]

export function Projects() {
  const t = useTranslations("projects")
  const { direction } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className={cn("section-title text-center mb-12", direction === "rtl" && "font-arabic")}>
            {t("title")}
          </h2>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {visibleProjects.map((project, index) => (
            <AnimateInView key={project.id} animation="slideUp" delay={0.1 * index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="bg-secondary border-secondary flex flex-col overflow-hidden h-[500px] hover:cursor-pointer">
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
                    {project.githubUrl && <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {t("github")}
                        </a>
                      </Button>
                    </motion.div>}
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

        {projects.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="px-8"
            >
              {showAll ? t("showLess") : t("showMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

