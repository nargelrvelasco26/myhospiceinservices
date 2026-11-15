import { SlideHeader } from '../SlideHeader'

export function SourcesSlide({
  eyebrow,
  title,
  rows,
  note,
}: {
  eyebrow: string
  title: string
  rows: { label: string; body: string }[]
  note: string
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="space-y-2 mb-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 bg-white border border-hospice-card-green rounded-xl px-5 py-3"
          >
            <span className="font-bold text-hospice-green text-sm w-28 shrink-0">
              {row.label}
            </span>
            <span className="text-slate-700 text-sm">{row.body}</span>
          </div>
        ))}
      </div>
      <p className="text-xs italic text-slate-500">{note}</p>
    </div>
  )
}
