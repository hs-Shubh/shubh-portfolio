"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

const items = [
  {
    name: 'n8n Marketing Agent',
    doc: 'https://docs.google.com/document/d/1MetBsp1OgDPTBIs6tDcPctQTlgDIehcSb-zN2nQMKlo/edit',
    icon: '📱'
  },
  {
    name: 'n8n SEO Audit Agent',
    doc: 'https://docs.google.com/document/d/17HIi3LMyrnS-siiLeSk76PnaGuBybP8NTONefX073Js/edit',
    icon: '🔍'
  },
  {
    name: 'AI BOQ Agent Case Study',
    doc: 'https://docs.google.com/document/d/1MS8ZEI6aGp9TagifIXf3UvXEDrCJVX0zgy2S02aoHeQ/edit',
    icon: '📊'
  }
]

export default function WorkflowsDocs() {
  return (
    <section className="section" id="workflows">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Workflows & Documentation
        </motion.h2>
        <motion.p 
          className="mt-3 text-white/70 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Detailed documentation and sanitized workflow JSONs. All API keys and sensitive data removed for security.
        </motion.p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((x, index) => (
            <motion.div 
              key={x.name} 
              className="card p-6 group relative overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-4xl mb-3">{x.icon}</div>
                <div className="text-xl font-semibold mb-2">{x.name}</div>
                <p className="mt-2 text-sm text-white/70 flex-grow">Sanitized workflow documentation with detailed explanations</p>
                <div className="mt-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href={x.doc} target="_blank" className="btn btn-outline w-full">
                      Open Documentation
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
