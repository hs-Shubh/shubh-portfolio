"use client"
import { motion } from 'framer-motion'

type ExperienceItem = {
  role: string
  company: string
  duration: string
  achievements: string[]
  tech: string[]
}

const items: ExperienceItem[] = [
  {
    role: 'AI Intern',
    company: 'Hagerstone International Pvt. Ltd.',
    duration: 'Nov 2024 - Present (6+ months)',
    achievements: [
      'Developed production website using React with dynamic pages (https://hagerstone.com/)',
      'Built in-house PMS system with project creation, employee assignment, and messaging features',
      'Implemented Row-Level Security (RLS) policies for secure data access',
      'Created Marketing Agent for automated social media and LinkedIn post generation',
      'Developed SEO Agent performing technical and content audits with detailed reports'
    ],
    tech: ['React', 'Next.js', 'RLS Policies', 'AI Agents', 'n8n', 'PostgreSQL']
  },
  {
    role: 'Software Trainee',
    company: 'Axess.ai',
    duration: 'Jan 2024 – Nov 2024 • Hybrid, Noida',
    achievements: [
      'Improved IoT platform latency by 15% and data processing speed by 25%',
      'Designed interactive dashboards using Node.js and vanilla JavaScript',
      'Enhanced user experience by 30% with intuitive visualizations and responsive layouts'
    ],
    tech: ['Node.js', 'JavaScript', 'IoT', 'Dashboards']
  },
  {
    role: 'Software Developer Intern',
    company: 'Hundred Solutions',
    duration: 'Previous Internship',
    achievements: [
      'Worked with Odoo Platform and Modules development',
      'Connected Modules with website for automation using custom scripts',
      'Created MCP server with Claude for task automation',
      'Developed websites using WordPress'
    ],
    tech: ['Odoo', 'Python', 'WordPress', 'MCP Server', 'Claude AI']
  }
]

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
      duration: 0.5,
      // Use cubic-bezier easing compatible with Framer Motion v11+ types
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="mt-8 grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((x, index) => (
            <motion.div 
              key={x.role} 
              className="card p-6 group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm text-brand-300 font-medium">{x.company}</div>
                    <div className="mt-1 text-xl font-semibold">{x.role}</div>
                    <div className="mt-1 text-xs text-white/50">{x.duration}</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {x.achievements.map((i, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <span className="text-brand-400 mt-1">▹</span>
                      <span>{i}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {x.tech.map((t) => (
                    <span key={t} className="badge text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
