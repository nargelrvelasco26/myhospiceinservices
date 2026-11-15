import { Lightbulb } from 'lucide-react'

export function QuizIntroSlide({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-14 h-14 rounded-full bg-hospice-gold flex items-center justify-center mb-6">
        <Lightbulb className="text-white" size={28} />
      </div>
      <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-hospice-gold uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif text-5xl font-bold text-hospice-green-dark mb-5">{title}</h2>
      <p className="text-lg text-slate-600 max-w-xl">{subtitle}</p>
    </div>
  )
}
