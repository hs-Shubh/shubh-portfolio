"use client"
import { motion } from 'framer-motion'

export default function Testimonials() {
  const items = [
    {
      name: "Hagerstone International",
      role: "AI Internship Supervisor",
      quote: "Shubh delivered a production-ready company website and internal PMS that reduced our manual workload by 40%. His AI automation systems are already saving us hours each week."
    },
    {
      name: "HundredSolution",
      role: "Software Developer Intern Manager",
      quote: "Shubh's full-stack skills and prompt engineering expertise helped us ship features faster. He brings a rare mix of technical depth and business focus."
    }
  ]

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((x, index) => (
            <motion.div 
              key={x.name} 
              className="card p-6 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-2xl text-brand-400 mb-4">"</div>
                <div className="text-white/90 italic text-lg leading-relaxed">"{x.quote}"</div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="font-semibold text-lg">{x.name}</div>
                  <div className="text-sm text-white/60 mt-1">{x.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}