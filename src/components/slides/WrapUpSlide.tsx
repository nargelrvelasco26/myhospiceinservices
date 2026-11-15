import { Icon } from '../Icon'
import { SlideHeader } from '../SlideHeader'
import type { IconName } from '../../lib/types'

export function WrapUpSlide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: { icon: IconName; body: string }[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white border border-hospice-card-green rounded-xl px-5 py-4"
          >
            <Icon name={item.icon} className="text-hospice-green-dark shrink-0" size={22} />
            <p className="text-slate-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
