"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Job360",
    description:
      "An interview simulation platform designed to help job candidates improve their skills by practicing predefined interview questions. Users can record answers and receive feedback.",
    image: "/placeholder.svg?height=300&width=500",
    tech: "REACT JS, REACT HOOK FORM, ZOD, FRAMER MOTION, SOCKET.IO",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Scopal Media Platform",
    description:
      "A media platform focused on selling news, media, and gossip content. Features include voice search using Speech API with AI, authentication using nextAuth and JWT, and custom audio and video players.",
    image: "/placeholder.svg?height=300&width=500",
    tech: "NEXT.JS 14, TYPESCRIPT, TAILWIND, SHADCN UI, REACT QUERY",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "PowerLook CMS",
    description:
      "A CMS for managing E-commerce applications with access control features and booking time schedules. Includes a comprehensive real-time chat system using Express.js, Next.js, and Socket.io.",
    image: "/placeholder.svg?height=300&width=500",
    tech: "EXPRESS.JS, NEXT.JS, SOCKET.IO, FULL CALENDAR",
    githubUrl: "#",
    demoUrl: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className="section-title text-center mb-12">MY PROJECTS</h2>
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
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </motion.div>
                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">TECH: {project.tech}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Github
                        </a>
                      </Button>
                    </motion.div>
                    {project.demoUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
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

