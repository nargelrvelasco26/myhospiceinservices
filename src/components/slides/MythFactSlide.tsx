import { XCircle, CheckCircle2 } from 'lucide-react'
import { SlideHeader } from '../SlideHeader'

export function MythFactSlide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: { myth: string; fact: string }[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 text-sm font-bold text-hospice-green-dark mb-1 px-1">
        <span>Myth</span>
        <span>Fact</span>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <XCircle className="text-rose-700 shrink-0" size={22} />
              <p className="italic text-slate-700 text-sm">{item.myth}</p>
            </div>
            <div className="flex items-center gap-3 bg-hospice-card-green rounded-xl px-4 py-3">
              <CheckCircle2 className="text-hospice-green shrink-0" size={22} />
              <p className="text-slate-700 text-sm">{item.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
