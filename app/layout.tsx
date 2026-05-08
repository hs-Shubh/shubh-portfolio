import './globals.css'
import type { Metadata } from 'next'
import AIBackground from '@/components/AIBackground'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Shubh Dwivedi | AI & Full-Stack Developer',
  description: 'Production-ready portfolio showcasing enterprise AI systems, internal platforms, and deployed projects.',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AIBackground />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
