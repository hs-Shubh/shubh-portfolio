"use client"
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="section border-t border-white/10">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div 
          className="text-white/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2025 Shubh Dwivedi. All rights reserved.
        </motion.div>
        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/hs-Shubh' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubh-dwivedi-61b342224/' },
            { label: 'Email', href: 'mailto:shubhdwivedi2003@gmail.com' }
          ].map((link, index) => (
            <motion.a 
              key={link.label}
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-white/70 hover:text-brand-400 transition-colors text-sm"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
