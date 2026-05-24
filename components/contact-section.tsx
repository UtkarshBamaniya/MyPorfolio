"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open mail client with pre-filled email
    const mailtoLink = `mailto:utkarshbamania777@gmail.com?subject=Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get in touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="bg-card resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:utkarshbamania777@gmail.com"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-foreground group-hover:text-primary transition-colors">
                        utkarshbamania777@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+918849165666"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-foreground group-hover:text-primary transition-colors">
                        +91 8849165666
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="text-foreground">Rajkot, Gujarat, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Social Links</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/UtkarshBamaniya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/utkarsh-bamaniya-96b834227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:utkarshbamania777@gmail.com"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
