import { SlideHeader } from '../SlideHeader'

export function TimelineSlide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: { year: string; body: string; color: string }[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`${item.color} text-white rounded-xl p-5 min-h-[180px] flex flex-col`}
          >
            <p className="font-serif text-3xl font-bold mb-3">{item.year}</p>
            <p className="text-sm leading-relaxed opacity-95">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
