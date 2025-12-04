"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

function Card({ title, type, description, tech, buttons, index }: { title: string; type: string; description: string[]; tech: string[]; buttons: { label: string; href: string }[]; index: number }) {
  return (
    <motion.div 
      className="card p-6 group relative overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-xs text-brand-300 font-medium uppercase tracking-wider">{type}</div>
        <h3 className="mt-2 text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/70 flex-grow">
          {description.map((d, idx) => (
            <motion.li 
              key={idx}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
            >
              <span className="text-brand-400 mt-1">▹</span>
              <span>{d}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <motion.span 
              key={t} 
              className="badge text-xs"
              whileHover={{ scale: 1.1 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {buttons.map((b) => (
            <motion.div key={b.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={b.href} className="btn btn-outline" target={b.href.startsWith('http') ? '_blank' : undefined}>
                {b.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: "Hagerstone International – Official Company Website",
      type: "Production Website",
      description: [
        'Developed production website using React with dynamic pages',
        'Built modern, responsive UI with optimized performance',
        'Implemented scalable architecture for future enhancements'
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      buttons: [
        { label: 'Visit Live Website', href: 'https://hagerstone.com/' }
      ]
    },
    {
      title: "Hagerstone PMS (Project Management System)",
      type: "Enterprise Application",
      description: [
        'Built in-house PMS system with project creation and assignment features',
        'Implemented Row-Level Security (RLS) policies for secure data access',
        'Automated messaging system for employee notifications',
        'Reduced manual project tracking workload significantly'
      ],
      tech: ["React", "Next.js", "RLS Policies", "PostgreSQL", "Vercel"],
      buttons: [
        { label: 'Visit PMS', href: 'https://hsiplpms.vercel.app' }
      ]
    },
    {
      title: "Marketing Agent",
      type: "AI Automation Agent",
      description: [
        'Developed AI-powered marketing agent for social media automation',
        'Generates creative posts and captions for LinkedIn and other platforms',
        'Uses advanced LLM workflows for content generation',
        'Streamlines marketing workflow with automated content creation'
      ],
      tech: ["n8n", "LLMs", "Prompt Engineering", "AI Agents"],
      buttons: [
        { label: 'View Documentation', href: 'https://docs.google.com/document/d/1MetBsp1OgDPTBIs6tDcPctQTlgDIehcSb-zN2nQMKlo/edit' }
      ]
    },
    {
      title: "SEO Audit Agent",
      type: "AI-Powered SEO Tool",
      description: [
        'Developed automated SEO audit agent for website analysis',
        'Performs comprehensive technical and content audits',
        'Generates detailed reports with actionable recommendations',
        'Uses domain-tuned LLM pipelines for accurate analysis'
      ],
      tech: ["n8n", "LLMs", "SEO Analysis", "Automation"],
      buttons: [
        { label: 'View Documentation', href: 'https://docs.google.com/document/d/17HIi3LMyrnS-siiLeSk76PnaGuBybP8NTONefX073Js/edit' }
      ]
    },
    {
      title: "Legal AI",
      type: "College Major Project",
      description: [
        'Built comprehensive Legal AI system as major college project',
        'AI-powered legal document analysis and processing',
        'Advanced NLP capabilities for legal text understanding',
        'Demonstrates expertise in AI/ML and domain-specific applications'
      ],
      tech: ["Python", "NLP", "Machine Learning", "AI"],
      buttons: [
        { label: 'Learn More', href: '#' }
      ]
    },
    {
      title: "Odoo Platform Integration & MCP Server",
      type: "Enterprise Automation",
      description: [
        'Worked with Odoo Platform and custom module development',
        'Connected modules with website for automation using scripts',
        'Created MCP server with Claude AI for task automation',
        'Developed WordPress websites with custom integrations'
      ],
      tech: ["Odoo", "Python", "MCP Server", "Claude AI", "WordPress"],
      buttons: [
        { label: 'Learn More', href: '#' }
      ]
    }
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Project Showcase
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              title={project.title}
              type={project.type}
              description={project.description}
              tech={project.tech}
              buttons={project.buttons}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
