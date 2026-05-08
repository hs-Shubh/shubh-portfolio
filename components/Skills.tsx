"use client"
import { motion } from 'framer-motion'

const groups = [
  {
    name: 'Frontend',
    skills: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    icon: '🎨'
  },
  {
    name: 'Backend & Cloud',
    skills: ['Node.js', 'Express.js', 'Prisma', 'NextAuth', 'PostgreSQL', 'Supabase', 'AWS'],
    icon: '⚙️'
  },
  {
    name: 'AI & Automation',
    skills: ['NLP', 'Transformers', 'AI Agents', 'n8n', 'Prompt engineering', 'LLM workflows'],
    icon: '🤖'
  },
  {
    name: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'Odoo', 'Git', 'Vercel', 'Python', 'FastAPI', 'WordPress'],
    icon: '🛠️'
  }
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {groups.map((g, index) => (
            <motion.div 
              key={g.name} 
              className="card p-6 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{g.icon}</span>
                  <div className="text-xl font-semibold">{g.name}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s, idx) => (
                    <motion.span 
                      key={s} 
                      className="badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(86, 104, 255, 0.2)' }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
