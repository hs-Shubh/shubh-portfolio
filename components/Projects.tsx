"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ProjectButton = { label: string; href: string }

type ProjectItem = {
  title: string
  type: string
  description: string[]
  tech: string[]
  buttons: ProjectButton[]
  imageSrc?: string
  imageAlt?: string
}

type CardProps = ProjectItem & { index: number }

function Card({
  title,
  type,
  description,
  tech,
  buttons,
  index,
  imageSrc,
  imageAlt,
}: CardProps) {
  return (
    <motion.div
      className="card p-0 group relative overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -6 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {imageSrc ? (
        <div className="relative h-44 w-full overflow-hidden border-b border-white/10">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/85 to-transparent" />
          <span className="absolute left-4 bottom-3 text-[10px] font-semibold uppercase tracking-widest text-brand-200/95">
            {type}
          </span>
        </div>
      ) : null}
      <div className={`relative z-10 flex flex-col h-full flex-1 p-6 ${imageSrc ? 'pt-5' : ''}`}>
        {!imageSrc ? (
          <div className="text-xs text-brand-300 font-medium uppercase tracking-wider">{type}</div>
        ) : null}
        <h3 className={`mt-1 text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent ${imageSrc ? '' : 'mt-2'}`}>
          {title}
        </h3>
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
              whileHover={{ scale: 1.08 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {buttons.map((b) => (
            <motion.div key={b.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={b.href}
                className="btn btn-outline"
                target={b.href.startsWith('http') ? '_blank' : undefined}
                rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
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
  const projects: ProjectItem[] = [
    {
      title: 'Hagerstone Lead Scraper (Google Places + Supabase)',
      type: 'Open repo · Data & APIs',
      description: [
        'Full-stack scraper: FastAPI backend, Vite frontend, Supabase cache layer',
        'Structured contractor/vendor data across India with dedupe-friendly storage',
        'Uses Google Places API (New) with Render + Vercel deployment paths documented',
      ],
      tech: ['Python', 'FastAPI', 'React', 'Vite', 'Supabase', 'Google Places API'],
      buttons: [{ label: 'View on GitHub', href: 'https://github.com/hs-Shubh/Scrapper_application' }],
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
      imageAlt: 'Analytics dashboards representing structured data extraction',
    },
    {
      title: 'HR Hiring Automation',
      type: 'Open repo · HRTECH',
      description: [
        'End-to-end hiring funnel visualization from sourcing to onboarding',
        'n8n workflows + Supabase schema with a React/Vite operator experience',
        'Built to align multi-source candidates into a single auditable pipeline',
      ],
      tech: ['React', 'Vite', 'Supabase', 'n8n', 'TypeScript'],
      buttons: [{ label: 'View on GitHub', href: 'https://github.com/hs-Shubh/Hr-Hiring-Automation' }],
      imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=600&fit=crop&q=80',
      imageAlt: 'People collaborating — hiring and pipeline coordination',
    },
    {
      title: 'Expense Automation · Finance management',
      type: 'Open repo · FinOps',
      description: [
        'Automated finance operations with backend, web dashboard, and mobile client',
        'Multi-surface architecture with Docker + deployment-ready configuration',
        'Designed for policy-aware tracking across teams and projects',
      ],
      tech: ['Node.js', 'React', 'Mobile', 'Docker', 'PostgreSQL patterns'],
      buttons: [{ label: 'View on GitHub', href: 'https://github.com/hs-Shubh/Expense-Automation' }],
      imageSrc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=600&fit=crop&q=80',
      imageAlt: 'Finance workspace with invoices and calculator',
    },
    {
      title: 'CPS — Centralised Procurement System',
      type: 'Open repo · Enterprise',
      description: [
        'Procurement workspace for vendor discovery, RFQ creation, and quote orchestration',
        'Mirrors real operational flows: fewer spreadsheets, more traceability',
        'Representative of large React/Node systems I ship for operations teams',
      ],
      tech: ['Enterprise UI', 'Workflow design', 'Vendor ops', 'RFQ flow'],
      buttons: [{ label: 'View on GitHub', href: 'https://github.com/hs-Shubh/CPS-Centralised-Procurement-System-' }],
      imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=600&fit=crop&q=80',
      imageAlt: 'Warehouse and logistics — procurement and supply chain',
    },
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
        <p className="mt-4 max-w-2xl text-sm text-white/65">
          Featured GitHub repositories with imagery matched to each problem domain — data platforms, HR automation, finance operations, and procurement.
        </p>
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
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
