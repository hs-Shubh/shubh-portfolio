"use client"
import { motion } from 'framer-motion'

export default function About() {
  const expertise = [
    {
      title: "AI & NLP Systems",
      description: "Designing and deploying domain-specific models and workflows.",
      icon: "🤖"
    },
    {
      title: "Automation with n8n & AI Agents",
      description: "Building robust agents and sanitized workflows for operations.",
      icon: "⚡"
    },
    {
      title: "Full-Stack Development",
      description: "React, Next.js, Node.js with scalable, maintainable architectures.",
      icon: "💻"
    }
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="mt-8 card p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I graduated in <span className="text-brand-400 font-semibold">November 2025</span> with a B.Tech in Computer Science. Currently, I'm pursuing an AI Internship at <span className="text-brand-400 font-semibold">Hagerstone International Pvt. Ltd.</span>, where I've been working for the past 6+ months on cutting-edge AI systems, enterprise applications, and production deployments.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div 
                key={item.title}
                className="card p-6 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
