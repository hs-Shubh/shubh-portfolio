"use client"
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.form 
            className="card p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            action="mailto:shubhdwivedi2003@gmail.com" 
            method="post" 
            encType="text/plain"
          >
            <div className="grid gap-4">
              <motion.input 
                className="rounded-md bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-white placeholder:text-white/50"
                placeholder="Your Name" 
                name="name" 
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input 
                className="rounded-md bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-white placeholder:text-white/50"
                placeholder="Your Email" 
                name="email" 
                type="email" 
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea 
                className="rounded-md bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-white placeholder:text-white/50 resize-none"
                placeholder="Message" 
                name="message" 
                rows={5} 
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                className="btn btn-primary w-full" 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
          <motion.div 
            className="card p-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <motion.span 
                className="badge text-center text-sm py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Open to Full-Time / Internship Opportunities
              </motion.span>
              <motion.div className="flex flex-col gap-3 mt-2">
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubh-dwivedi-61b342224/' },
                  { label: 'GitHub', href: 'https://github.com/hs-Shubh' },
                  { label: 'Email', href: 'mailto:shubhdwivedi2003@gmail.com' }
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/80 hover:text-brand-400 transition-colors underline flex items-center gap-2"
                    >
                      <span>{link.label}</span>
                      <motion.span
                        initial={{ x: -5, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
