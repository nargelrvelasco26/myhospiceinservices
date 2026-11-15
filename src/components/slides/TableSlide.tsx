import { SlideHeader } from '../SlideHeader'

export function TableSlide({
  eyebrow,
  title,
  columns,
  rows,
}: {
  eyebrow: string
  title: string
  columns: string[]
  rows: string[][]
}) {
  return (
    <div>
      <SlideHeader eyebrow={eyebrow} title={title} />
      <div className="overflow-hidden rounded-xl border border-hospice-card-green">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-hospice-green text-white">
              {columns.map((col, i) => (
                <th key={i} className="text-left font-semibold px-4 py-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? 'bg-white' : 'bg-hospice-card-green/60'}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 align-top ${
                      ci === 0 ? 'font-semibold text-hospice-green-dark' : 'text-slate-700'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
