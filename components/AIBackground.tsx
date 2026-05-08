"use client"
import { useEffect, useRef } from 'react'

export default function AIBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Particle = {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      a: number
      pulse: number
      pulseSpeed: number
    }

    const particles: Particle[] = []
    const count = 100
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 3 + 1,
        a: Math.random() * 0.6 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      })
    }

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      )
      gradient.addColorStop(0, 'rgba(86, 104, 255, 0.1)')
      gradient.addColorStop(1, 'rgba(86, 104, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed
        
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Pulsing effect
        const pulseRadius = p.r + Math.sin(p.pulse) * 0.5
        
        // Draw glow
        const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseRadius * 3)
        glowGradient.addColorStop(0, `rgba(86, 104, 255, ${p.a * 0.5})`)
        glowGradient.addColorStop(1, `rgba(86, 104, 255, 0)`)
        ctx.fillStyle = glowGradient
        ctx.fillRect(p.x - pulseRadius * 3, p.y - pulseRadius * 3, pulseRadius * 6, pulseRadius * 6)

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(86, 104, 255, ${p.a})`
        ctx.fill()
      }

      // Draw connections with improved visuals
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const opacity = 0.2 * (1 - dist / 150)
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            )
            gradient.addColorStop(0, `rgba(86, 104, 255, ${opacity})`)
            gradient.addColorStop(1, `rgba(86, 104, 255, ${opacity * 0.5})`)
            
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Add floating orbs
      if (frame % 300 === 0) {
        const orbX = Math.random() * canvas.width
        const orbY = Math.random() * canvas.height
        const orbRadius = 100 + Math.random() * 50
        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbRadius)
        orbGradient.addColorStop(0, 'rgba(86, 104, 255, 0.1)')
        orbGradient.addColorStop(1, 'rgba(86, 104, 255, 0)')
        ctx.fillStyle = orbGradient
        ctx.fillRect(orbX - orbRadius, orbY - orbRadius, orbRadius * 2, orbRadius * 2)
      }

      frame++
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at top, #0b0f1a, #0b0f1a 60%, #05070e)' }}
    />
  )
}