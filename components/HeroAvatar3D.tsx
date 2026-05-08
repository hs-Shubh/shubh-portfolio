"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"

const IMG =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=640&fit=crop&q=80"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener("change", on)
    return () => mq.removeEventListener("change", on)
  }, [])
  return reduced
}

export default function HeroAvatar3D() {
  const reduced = usePrefersReducedMotion()
  const wrapRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [6, -6])
  const rotateX = useTransform(sy, [-0.5, 0.5], [-5, 5])

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (reduced || !wrapRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      mx.set(Math.max(-0.5, Math.min(0.5, px)))
      my.set(Math.max(-0.5, Math.min(0.5, py)))
    },
    [mx, my, reduced]
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <div
      ref={wrapRef}
      className="hero-3d-stage mx-auto w-full max-w-md md:max-w-none perspective-[1000px]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.div
        className="relative preserve-3d will-change-transform"
        style={
          reduced
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        whileHover={reduced ? undefined : { scale: 1.02 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <div
          className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/40 via-brand-600/20 to-transparent opacity-60 blur-2xl"
          style={{ transform: "translateZ(-24px)" }}
          aria-hidden
        />
        <div
          className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-2xl ring-1 ring-white/10"
          style={{ transform: "translateZ(12px)" }}
        >
          <div className="relative aspect-square w-full max-h-[420px] md:max-h-[460px]">
            <Image
              src={IMG}
              alt="Developer workspace representing full-stack and automation focus"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 480px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/90 via-[#0b0f1a]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
                    Software · Automation · AI
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white md:text-xl">
                    Building systems that scale
                  </p>
                </div>
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 text-lg font-bold text-white backdrop-blur-md"
                  style={{ transform: "translateZ(28px)" }}
                >
                  SD
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute -right-6 top-8 hidden h-24 w-24 rounded-2xl border border-white/10 bg-brand-500/10 backdrop-blur-md md:block"
          style={{ transform: "translateZ(32px) rotateY(-12deg)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-5 bottom-16 hidden h-16 w-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md md:block"
          style={{ transform: "translateZ(20px) rotateX(8deg)" }}
          aria-hidden
        />
      </motion.div>
    </div>
  )
}
