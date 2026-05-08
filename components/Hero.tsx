"use client"
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import HeroAvatar3D from '@/components/HeroAvatar3D'
import SkillsMarquee from '@/components/SkillsMarquee'

const roles = ["Software Developer & AI Automation Engineer", "Full-Stack Developer", "AI Workflow Architect", "Automation Engineer"]

const HOME_LEAD =
  "Software Developer & AI Automation Engineer specializing in full-stack development, AI workflows, cloud infrastructure, and business automation systems. Currently at Hagerstone International, I've delivered scalable platforms including finance management, HR automation, AI-powered n8n workflows, web scraping applications, and enterprise operational tools using AWS, Supabase, and modern backend and frontend technologies."

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 72])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -36])
  const visualOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.35])

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: ReturnType<typeof setTimeout>

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
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <section ref={sectionRef} className="section min-h-screen flex items-center pt-20">
      <div className="container grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="hero-parallax order-2 md:order-1"
          style={{ y: textY }}
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
              <span className="inline-block min-w-[280px] md:min-w-[340px]">
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
            className="mt-6 text-white/80 max-w-xl leading-relaxed text-[15px] md:text-base"
          >
            {HOME_LEAD}
          </motion.p>

          <motion.div variants={itemVariants}>
            <SkillsMarquee />
          </motion.div>

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
          className="order-1 md:order-2 hero-parallax"
          style={{ y: visualY, opacity: visualOpacity }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroAvatar3D />
          <motion.p
            className="mt-6 text-center text-sm text-white/55 max-w-md mx-auto md:text-left md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            Interactive 3D card — tilt follows your pointer (disabled when reduced motion is on).
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
