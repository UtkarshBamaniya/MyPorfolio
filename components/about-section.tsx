"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            Building digital experiences that matter
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Passionate full-stack web developer experienced in frontend and backend integration using Vue.js, Laravel, MySQL, and REST APIs. Focused on writing clean, maintainable code and continuously learning modern technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating web applications that are not only functional but also provide an exceptional user experience. My approach combines technical expertise with an eye for design to deliver solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">1+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
