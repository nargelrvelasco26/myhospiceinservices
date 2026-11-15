import { ChevronRight } from 'lucide-react'
import { Icon } from '../Icon'
import { SlideHeader } from '../SlideHeader'
import type { IconName } from '../../lib/types'

export function StepsSlide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: { icon: IconName; title: string; body: string }[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="flex flex-wrap md:flex-nowrap items-stretch gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center flex-1 min-w-[140px]">
            <div className="bg-white border border-hospice-card-green rounded-xl p-4 flex-1 flex flex-col items-center text-center gap-2">
              <span className="w-6 h-6 rounded-full bg-hospice-green-dark text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <Icon name={item.icon} className="text-hospice-green" size={26} />
              <p className="font-serif font-bold text-hospice-green-dark text-sm">
                {item.title}
              </p>
              <p className="text-xs text-slate-600 leading-snug">{item.body}</p>
            </div>
            {i < items.length - 1 && (
              <ChevronRight
                className="text-hospice-gold shrink-0 hidden md:block mx-1"
                size={20}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
