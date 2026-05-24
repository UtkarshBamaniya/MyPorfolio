"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Utkarsh Bamaniya
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/UtkarshBamaniya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/utkarsh-bamaniya-96b834227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:utkarshbamania777@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
