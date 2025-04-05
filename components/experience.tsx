"use client"

import { AnimateInView } from "./animate-in-view"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "React Developer",
    company: "NadSoft",
    period: "Jan 2023 - Present",
    location: "Remote - Jordan",
    description: [
      "Maintained and enhanced the Job360 application, an interview simulation platform designed to help job candidates improve their skills by practicing predefined interview questions.",
      'Developed and implemented the "My Profile" section for mentors, allowing personal details and administrative notes to be managed.',
      "Utilized React.js with React Hook Form for data collection, Zod for validation, Framer Motion for animation, and Socket.io for real-time chat.",
      "Contributed to system improvements by enabling organizations to manage user registrations, access, and usage.",
      "Worked on expanding Job360 functionality by designing an AI Analysis Component for detailed feedback on recorded answers and a Self-Registration Feature allowing independent user sign-ups.",
    ],
  },
  {
    id: 2,
    role: "Front End Developer",
    company: "Scopal",
    period: "Dec 2023 - Jan 2025",
    location: "Freelance Project - London, UK",
    description: [
      "Developed and maintained a media platform focused on selling news, media, and gossip content using Next 14 with TypeScript.",
      "Implemented a voice search feature over all the website using the Speech API with AI.",
      "Created END TO END Testing using Cypress and TypeScript.",
      "Implemented authentication and authorization using nextAuth and JWT, integrating pre-existing API servers.",
      "Achieved responsive and modern UI using Tailwind and Shadcn UI.",
      "Used React Query for efficient data fetching and state management.",
      "Applied SSR, SSG, and CSR techniques for optimal performance and SEO.",
      "Created custom audio and video players to enhance the media consumption experience on the platform.",
      "Utilized React Hook Form and Zod for robust form management and data validation.",
    ],
  },
  {
    id: 3,
    role: "Front End Developer",
    company: "Suhool Investment",
    period: "Oct 2022 - Dec 2022",
    location: "Remote - Saudi Arabia",
    description: [
      'Worked on "PowerLook", a CMS for managing E-commerce applications.',
      "Developed access control features and booking time schedules using Full Calendar.",
      "Developed a comprehensive real-time chat system using Express.js, Next.js, and Socket.io.",
      "Suhool is a diversified industrial conglomerate in Saudi Arabia, involved in sectors such as recruitment of workers, oil and gas, manufacturing, and real estate.",
      "Diligently investigated and resolved project bugs to ensure optimal performance and user experience.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fadeIn">
          <h2 className="section-title text-center mb-12">WORK EXPERIENCE</h2>
        </AnimateInView>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary"></div>

            {experiences.map((exp, index) => (
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
                      className="bg-secondary p-6 rounded-lg shadow-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-xl font-heading font-bold mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-heading mb-2">{exp.company}</h4>

                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
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

