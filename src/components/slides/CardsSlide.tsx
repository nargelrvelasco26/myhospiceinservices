import { Icon } from '../Icon'
import { SlideHeader } from '../SlideHeader'
import type { CardItem } from '../../lib/types'

export function CardsSlide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: CardItem[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-hospice-card-green rounded-xl p-5 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-hospice-card-green flex items-center justify-center mb-3">
              <Icon name={item.icon} className="text-hospice-green-dark" size={20} />
            </div>
            <p className="font-serif font-bold text-hospice-green-dark text-lg mb-1">
              {item.title}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
