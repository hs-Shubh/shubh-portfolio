"use client"
import { motion } from 'framer-motion'

const expertise = [
  {
    title: "AI & intelligent workflows",
    description: "Agentic and AI-powered automation with n8n, LLMs, and production-grade orchestration.",
    icon: "🤖"
  },
  {
    title: "Full-stack & cloud",
    description: "Modern React and Next.js frontends with secure backends on Supabase, PostgreSQL, and AWS.",
    icon: "☁️"
  },
  {
    title: "Business systems",
    description: "End-to-end platforms for finance, HR, procurement, and operations with measurable impact.",
    icon: "📊"
  }
]

const HIGHLIGHTS = [
  "Hagerstone CPS (Centralised Procurement System)",
  "Finance Management System",
  "HR Hiring Automation System",
  "Web Scraper & structured data extraction",
  "AI-driven n8n workflows and internal tools"
]

const BIO_SHORT =
  "I am a versatile Software Developer and AI Automation Engineer with hands-on experience building scalable digital systems, intelligent workflows, and full-stack applications. Since joining Hagerstone International in June 2025, I have designed and developed multiple business-critical solutions across automation, finance, HR, and operational management."

const BIO_DETAIL = `My expertise includes developing AI-powered and agentic workflows using n8n, building modern frontend and backend architectures, integrating Supabase and AWS cloud services, and creating end-to-end automation systems that improve business efficiency and decision-making.

I specialize in combining AI, automation, cloud infrastructure, and software engineering to deliver scalable, impactful products — with a focus on solving real-world business problems through technology, innovation, and intelligent system design.`

export default function About() {
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
          className="mt-8 card p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <p className="text-lg text-white/95 leading-relaxed font-medium">
                {BIO_SHORT}
              </p>
              <div className="mt-6 space-y-4 text-white/78 leading-relaxed whitespace-pre-line">
                {BIO_DETAIL}
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand-200/90">
                Selected ship at Hagerstone International
              </p>
              <ul className="mt-4 space-y-2 text-white/80">
                {HIGHLIGHTS.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-brand-400 mt-0.5">▹</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-brand-500/10 to-transparent p-6 md:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-sm font-semibold text-brand-200/95 uppercase tracking-widest">
                Profile snapshot
              </p>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                B.Tech Computer Science graduate (November 2025). Focus areas: agentic automation, data-rich UIs, secure multi-tenant patterns, and integrations across Google Cloud tooling (e.g. Places API) alongside Supabase and AWS.
              </p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-4 text-xs text-white/50 leading-relaxed">
                For a concise headline version of this bio, see the introduction on the home hero — optimized for recruiters scanning your portfolio in seconds.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                className="card p-6 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
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
