import { useState } from 'react'
import { HelpCircle, CheckCircle2, Users2 } from 'lucide-react'

export function QuizSlide({
  index,
  total,
  question,
  options,
  answerLead,
  answer,
}: {
  index: number
  total: number
  question: string
  options?: string[]
  answerLead?: string
  answer: string
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div>
      <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-hospice-gold uppercase mb-2">
        Knowledge Check · Question {index} of {total}
      </p>
      <h2 className="font-serif text-3xl font-bold text-hospice-green-dark mb-6">
        Question {index}
      </h2>

      <div className="bg-white border border-hospice-card-green rounded-xl p-6 flex items-center justify-between gap-6 mb-4">
        <p className="font-serif text-xl font-bold text-hospice-green-dark">{question}</p>
        {!revealed && (
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <HelpCircle className="text-hospice-gold" size={32} />
          </div>
        )}
      </div>

      {options && (
        <div className="space-y-2 mb-4">
          {options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i)
            const isCorrect = revealed && answerLead?.startsWith(letter)
            return (
              <div
                key={opt}
                className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
                  isCorrect
                    ? 'bg-hospice-card-green border-hospice-green'
                    : 'bg-white border-hospice-card-green'
                }`}
              >
                <span className="w-7 h-7 rounded-full bg-amber-100 text-hospice-gold font-bold text-sm flex items-center justify-center shrink-0">
                  {letter}
                </span>
                <span className="text-slate-700">{opt}</span>
              </div>
            )
          })}
        </div>
      )}

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="flex items-center gap-2 bg-hospice-card-green hover:bg-hospice-green/20 transition-colors rounded-full px-5 py-3 text-sm font-semibold text-hospice-green-dark"
        >
          <Users2 size={18} />
          Ask the group — click to reveal the answer
        </button>
      ) : (
        <div className="bg-hospice-card-green rounded-xl p-5 flex items-start gap-4">
          <div className="w-9 h-9 rounded-full bg-hospice-green flex items-center justify-center shrink-0">
            <CheckCircle2 className="text-white" size={20} />
          </div>
          <p className="text-slate-700">
            {answerLead && <strong className="text-hospice-green-dark">{answerLead}. </strong>}
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}
