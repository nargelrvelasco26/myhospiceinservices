import { Heart } from 'lucide-react'
import { SlideHeader } from '../SlideHeader'

const DIAGRAM_NODES = [
  { label: 'Physician', color: 'bg-hospice-green-dark' },
  { label: 'RN', color: 'bg-hospice-green' },
  { label: 'Social worker', color: 'bg-slate-500' },
  { label: 'Chaplain', color: 'bg-hospice-gold' },
  { label: 'Aide', color: 'bg-slate-400' },
  { label: 'Volunteer', color: 'bg-slate-500' },
  { label: 'Bereavement', color: 'bg-slate-400' },
  { label: 'Therapies', color: 'bg-slate-400' },
]

export function TeamSlide({
  eyebrow,
  title,
  roles,
}: {
  eyebrow: string
  title: string
  roles: string[]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full aspect-square max-w-sm mx-auto bg-hospice-card-green rounded-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-rose-700/90 flex flex-col items-center justify-center text-white shadow-lg z-10">
            <Heart size={22} fill="white" />
            <span className="text-[10px] font-semibold mt-1 text-center leading-tight px-1">
              Patient &amp; family
            </span>
          </div>
          {DIAGRAM_NODES.map((node, i) => {
            const angle = (i / DIAGRAM_NODES.length) * 2 * Math.PI - Math.PI / 2
            const radius = 42
            const x = 50 + radius * Math.cos(angle)
            const y = 50 + radius * Math.sin(angle)
            return (
              <div
                key={node.label}
                className={`absolute w-16 h-16 rounded-full ${node.color} flex items-center justify-center text-white text-[11px] font-semibold text-center leading-tight px-1 shadow-md`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {node.label}
              </div>
            )
          })}
        </div>
        <ul className="space-y-2.5">
          {roles.map((role, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-hospice-gold mt-2 shrink-0" />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
