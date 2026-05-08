"use client"

const TAGS = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "n8n",
  "AI agents",
  "Supabase",
  "AWS",
  "PostgreSQL",
  "FastAPI",
  "Automation",
  "Full-stack",
  "Vite",
  "Tailwind CSS",
  "LLM workflows",
  "Data pipelines",
]

export default function SkillsMarquee() {
  const doubled = [...TAGS, ...TAGS]
  return (
    <div className="skills-marquee-mask relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-3">
      <div className="skills-marquee-track pointer-events-none flex w-max gap-3 pr-3">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="skills-marquee-pill shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 md:text-sm"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
