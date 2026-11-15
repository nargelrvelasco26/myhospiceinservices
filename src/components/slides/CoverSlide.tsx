import { Heart, Home, Users, Sun, Bird } from 'lucide-react'

export function CoverSlide({
  eyebrow,
  title,
  titleLine2,
  subtitle,
  badge,
  address,
}: {
  eyebrow: string
  title: string
  titleLine2: string
  subtitle: string
  badge: string
  address: string
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 h-full">
      <div className="flex-1 w-full">
        <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-hospice-gold uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-hospice-green-dark leading-none mb-6">
          {title}
          <br />
          {titleLine2}
        </h1>
        <p className="text-lg text-slate-600 max-w-md mb-6">{subtitle}</p>
        <div className="inline-block bg-hospice-card-green rounded-full px-5 py-2 text-sm font-semibold text-hospice-green-dark">
          {badge}
        </div>
        <p className="mt-10 text-sm text-slate-500">{address}</p>
      </div>

      <div className="relative shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-hospice-card-green flex items-center justify-center">
        <div className="w-36 h-36 rounded-full bg-hospice-green flex items-center justify-center shadow-lg">
          <Heart className="text-white" size={56} fill="white" />
        </div>
        <div className="absolute top-2 left-6 w-16 h-16 rounded-full bg-hospice-gold flex items-center justify-center shadow-md">
          <Home className="text-white" size={28} />
        </div>
        <div className="absolute top-4 right-2 w-16 h-16 rounded-full bg-slate-500 flex items-center justify-center shadow-md">
          <Users className="text-white" size={28} />
        </div>
        <div className="absolute bottom-2 left-4 w-16 h-16 rounded-full bg-hospice-green-dark flex items-center justify-center shadow-md">
          <Sun className="text-white" size={28} />
        </div>
        <div className="absolute bottom-4 right-6 w-16 h-16 rounded-full bg-rose-700/80 flex items-center justify-center shadow-md">
          <Bird className="text-white" size={28} />
        </div>
      </div>
    </div>
  )
}
