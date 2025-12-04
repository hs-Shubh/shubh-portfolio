"use client"
import { motion } from 'framer-motion'

export default function Stats() {
  const items = [
    { label: "Production Deployments", value: "6+", icon: "🚀" },
    { label: "Enterprise Tools Built", value: "3", icon: "🏢" },
    { label: "AI Agents Deployed", value: "4", icon: "🤖" },
    { label: "Months Experience", value: "6+", icon: "⏱️" }
  ]

  return (
    <section className="section" id="stats">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          By the Numbers
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((x, index) => (
            <motion.div 
              key={x.label} 
              className="card p-6 text-center group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-4xl mb-2">{x.icon}</div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {x.value}
                </motion.div>
                <div className="mt-2 text-sm text-white/70">{x.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}