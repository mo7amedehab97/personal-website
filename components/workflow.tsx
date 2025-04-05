"use client"

import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"

export function Workflow() {
  const workflowSteps = [
    { number: "01", title: "REQUIREMENTS ANALYSIS" },
    { number: "02", title: "ASK ABOUT DEADLINES AND RESTRICTIONS" },
    { number: "03", title: "SETTING UP THE ENVIRONMENT" },
    { number: "04", title: "PROGRAMMING" },
    { number: "05", title: "TESTING MY RESULTS" },
    { number: "06", title: "SUPPORTING AND SCALING MY CODE" },
  ]

  return (
    <section id="workflow" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateInView animation="fadeIn">
            <div className="mb-12 text-center">
              <h2 className="section-title">MY WORKFLOW</h2>
              <blockquote className="italic text-lg md:text-xl text-muted-foreground">
                "Code is like humor. When you have to explain it, it's bad."
                <cite className="block mt-2">- Cory House</cite>
              </blockquote>
            </div>
          </AnimateInView>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <AnimateInView key={step.number} animation="slideLeft" delay={0.1 * index}>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "var(--accent)",
                      color: "var(--primary)",
                    }}
                  >
                    <span className="font-heading font-medium">{step.number}</span>
                  </motion.div>
                  <div className="pt-2">
                    <h3 className="font-heading text-xl font-medium">{step.title}</h3>
                  </div>
                </motion.div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

