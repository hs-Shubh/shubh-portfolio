"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = ["AI Developer", "Full-Stack Developer", "AI Agent Creator", "Automation Engineer"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length - 1))
      }, 50)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // Use cubic-bezier easing compatible with Framer Motion v11+ types
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <section className="section min-h-screen flex items-center pt-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent">
                Shubh Dwivedi
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-4">
            <p className="text-xl md:text-2xl text-brand-300 font-medium">
              <span className="inline-block min-w-[280px]">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </span>
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/80 max-w-xl leading-relaxed"
          >
            B.Tech Computer Science Graduate (Nov 2025) | AI Intern @ Hagerstone International | Building production AI systems, enterprise platforms & scalable web applications
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/Shubhs_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Resume
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#projects" className="btn btn-outline">
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className="btn btn-outline">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-6 flex gap-6"
          >
            <motion.a 
              href="https://github.com/hs-Shubh" 
              className="text-white/80 hover:text-brand-400 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/shubh-dwivedi-61b342224/" 
              className="text-white/80 hover:text-brand-400 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="card p-8 group relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <motion.p 
              className="text-white/90 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Portfolio showcasing <span className="text-brand-400 font-semibold">production deployments</span>, enterprise tools, and AI automation systems built during my internship.
            </motion.p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Production deployments", "Enterprise systems", "AI agents", "Scalable web apps"].map((badge, index) => (
                <motion.span 
                  key={badge}
                  className="badge text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
