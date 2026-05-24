"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Vue.js", level: 85 },
  ],
  backend: [
    { name: "PHP", level: 88 },
    { name: "Laravel", level: 85 },
    { name: "REST APIs", level: 82 },
  ],
  database: [
    { name: "MySQL", level: 85 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 90 },
  ],
  soft: [
    "Team Collaboration",
    "Problem Solving",
    "Time Management",
  ],
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function SkillCard({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Technologies I work with
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Frontend Development" delay={0.1}>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={0.2 + index * 0.1} />
              ))}
            </SkillCard>

            <SkillCard title="Backend Development" delay={0.2}>
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + index * 0.1} />
              ))}
            </SkillCard>

            <SkillCard title="Database" delay={0.3}>
              {skills.database.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={0.4 + index * 0.1} />
              ))}
            </SkillCard>

            <SkillCard title="Tools & Software" delay={0.4}>
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={0.5 + index * 0.1} />
              ))}
            </SkillCard>

            <SkillCard title="Soft Skills" delay={0.5}>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SkillCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
