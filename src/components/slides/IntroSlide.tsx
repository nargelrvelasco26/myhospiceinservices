import { SlideHeader } from '../SlideHeader'

export function IntroSlide({
  eyebrow,
  title,
  paragraphs,
  note,
  objectivesHeading,
  objectives,
}: {
  eyebrow: string
  title: string
  paragraphs: string[]
  note: string
  objectivesHeading: string
  objectives: string[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5 text-slate-700 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-slate-600">{note}</p>
        </div>
        <div>
          <p className="font-bold text-hospice-green-dark mb-3">{objectivesHeading}</p>
          <div className="space-y-3">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-hospice-card-green rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="font-serif text-2xl font-bold text-hospice-gold leading-none">
                  {i + 1}
                </span>
                <p className="text-slate-700 pt-0.5">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
