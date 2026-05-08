import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import WorkflowsDocs from '@/components/WorkflowsDocs'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <WorkflowsDocs />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
