"use client"

import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { Calendar, GraduationCap, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    id: 1,
    type: "education",
    title: "Gaza Sky Geeks, Code Academy",
    period: "Jan 2022 - May 2022",
    description: "Career Accelerator Program",
    details: [
      "The Career Accelerator is an immersive, web development Bootcamp running five days a week, 8 hours a day for 8 months, focusing on building a solid foundation in web development with the tools React.js and Node.js.",
      "Engaging in weekly interactive workshops and coding challenges, doing research, testing, code reviews, and presentation.",
      "Building multiple projects, individually, in pairs, or as a team.",
      'Working in "Agile" methodology.',
    ],
  },
]

const courses = [
  {
    id: 1,
    type: "course",
    title: "Zero To Mastery, React Native Development",
    period: "Nov 2023 - Mar 2024",
    details: [
      "Mastered the latest features in React Native including Hooks, Context API, AsyncStorage, Animation, and more.",
      "Set up authentication and user accounts using Firebase and Firebase Functions.",
      "Integrated Google Maps API and added interactive maps to projects.",
      "Built reactive, performant, large-scale applications like a Senior Mobile App Developer.",
      "Implemented Stripe Payments (online payments) in mobile apps.",
      "Used React Navigation for routing and utilized native phone capabilities like Camera and Vibration.",
      "Applied Styled-Components and native styling to create beautiful, modern apps.",
    ],
  },
  {
    id: 2,
    type: "course",
    title: "Frontend Masters, React & TypeScript Architecture",
    period: "Aug 2023 - Oct 2023",
    details: [
      "Learned advanced architecture patterns and best practices for scalable React applications.",
      "Mastered the use of TypeScript for type safety and clean, maintainable code.",
      "Designed reusable and modular components with TypeScript.",
      "Gained deep understanding of state management, context, and custom hooks.",
      "Implemented efficient data fetching and API integration.",
      "Ensured application robustness with strong type definitions and interfaces.",
      "Improved project structure and code quality through advanced TypeScript features.",
    ],
  },
]

export function Education() {
  return (
    <section id="education" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className="section-title text-center mb-12">EDUCATION & COURSES</h2>
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <AnimateInView animation="fadeIn" delay={0.1}>
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h3>
            </AnimateInView>

            {education.map((item, index) => (
              <AnimateInView key={item.id} animation="slideUp" delay={0.2 + 0.1 * index}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-primary border-secondary mb-4">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <div className="text-accent font-medium">{item.description}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
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
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                <BookOpen className="mr-2" /> Courses
              </h3>
            </AnimateInView>

            {courses.map((item, index) => (
              <AnimateInView key={item.id} animation="slideUp" delay={0.2 + 0.1 * index}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-primary border-secondary mb-4">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
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

