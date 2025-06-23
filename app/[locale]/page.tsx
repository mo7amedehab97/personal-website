"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { Experience } from "@/components/experience"
import { Workflow } from "@/components/workflow"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { SpecialSkills } from "@/components/special-skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { direction } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  // During SSR or before hydration, return a minimal layout
  if (!isMounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-[36px] font-bold">MH...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen flex flex-col ${direction === "rtl" ? "rtl" : "ltr"}`}>
      <PageLoader />
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <SpecialSkills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

