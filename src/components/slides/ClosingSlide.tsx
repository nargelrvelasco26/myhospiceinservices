import { TreePine } from 'lucide-react'

export function ClosingSlide({
  title,
  subtitle,
  note,
  address,
}: {
  title: string
  subtitle: string
  note: string
  address: string
}) {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-14 h-14 rounded-full bg-hospice-gold/90 flex items-center justify-center mb-8">
        <TreePine className="text-white" size={28} />
      </div>
      <h2 className="font-serif text-5xl font-bold text-hospice-green-dark mb-6">{title}</h2>
      <p className="text-lg text-slate-600 max-w-xl mb-3">{subtitle}</p>
      <p className="text-slate-700 font-semibold mb-12">{note}</p>
      <p className="text-sm text-slate-500">{address}</p>
    </div>
  )
}
