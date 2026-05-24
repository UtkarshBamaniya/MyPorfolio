"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Web Developer",
    company: "Sphere Rays",
    period: "July 2026 – Present",
    type: "Full-time",
    description: [
      "Developed dynamic web applications using Vue.js and Laravel",
      "Integrated RESTful APIs for seamless data communication",
      "Implemented authentication and reusable components",
      "Collaborated with cross-functional teams for performance optimization",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Sphere Rays",
    period: "March 2024 – June 2024",
    type: "Internship",
    description: [
      "Built responsive UI components using modern CSS frameworks",
      "Worked on Laravel backend and MySQL database integration",
      "Debugged and optimized existing applications for better performance",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Experience</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Where I&apos;ve worked
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.period}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className={`relative flex items-start gap-6 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-y-0.5" />

                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors ${index % 2 === 0 ? "" : ""}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-primary">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-secondary rounded-full text-xs">{exp.type}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-left">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
