import { Icon } from '../Icon'
import { SlideHeader } from '../SlideHeader'
import type { IconName } from '../../lib/types'

export function IconGridSlide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: { icon: IconName; label: string }[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl border p-5 flex flex-col items-center text-center gap-3 ${
              i % 2 === 0
                ? 'bg-white border-hospice-card-green'
                : 'bg-hospice-card-green border-hospice-card-green'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-hospice-green-dark flex items-center justify-center">
              <Icon name={item.icon} className="text-white" size={26} />
            </div>
            <p className="font-semibold text-hospice-green-dark text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
