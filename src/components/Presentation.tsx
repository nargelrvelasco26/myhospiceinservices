import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft, LogOut } from 'lucide-react'
import type { Topic } from '../lib/types'
import { SlideView } from './SlideView'
import { PdfViewer } from './PdfViewer'
import hthLogo from '../images/hthlogo.png'

export function Presentation({
  topic,
  onBack,
  onLogout,
}: {
  topic: Topic
  onBack: () => void
  onLogout: () => void
}) {
  const [index, setIndex] = useState(0)
  const [pdfPages, setPdfPages] = useState(1)
  const slides = topic.slides
  const total = topic.pdfUrl ? pdfPages : slides.length

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), total - 1))
    },
    [total],
  )

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(index + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(index - 1)
      } else if (e.key === 'Home') {
        goTo(0)
      } else if (e.key === 'End') {
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, goTo, total])

  const slide = slides[index]
  const progress = total > 0 ? ((index + 1) / total) * 100 : 0

  return (
    <div className="h-screen w-screen flex flex-col bg-hospice-cream overflow-hidden">
      <header className="bg-hospice-card-green border-b border-hospice-gold/40 px-6 md:px-10 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold text-hospice-green-dark hover:text-hospice-green transition-colors"
          >
            <ArrowLeft size={16} />
            Topics
          </button>
          <span className="w-px h-5 bg-hospice-gold/40" />
          <div className="w-10 h-10 rounded-full bg-hospice-green flex items-center justify-center p-1.5">
            <img src={hthLogo} alt="Haloes Touch Hospice" className="w-full h-full object-contain" />
          </div>
          <span className="font-serif font-bold text-hospice-green-dark text-sm md:text-base">
            Haloes Touch Hospice Inc.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-hospice-green-dark uppercase">
            Staff In-Service · {topic.title}
          </span>
          <button
            onClick={onLogout}
            className="flex items-center gap-1 text-xs font-semibold text-hospice-green-dark hover:text-hospice-green transition-colors"
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </header>

      {topic.pdfUrl ? (
        <main className="flex-1 overflow-hidden bg-slate-200 p-4">
          <PdfViewer url={topic.pdfUrl} page={index + 1} onLoad={setPdfPages} />
        </main>
      ) : (
        <main className="flex-1 overflow-y-auto px-6 sm:px-12 md:px-20 py-8 md:py-12">
          <div className="max-w-5xl mx-auto h-full">
            <SlideView key={index} slide={slide} />
          </div>
        </main>
      )}

      <footer className="shrink-0 border-t border-hospice-card-green bg-white">
        <div className="h-1 bg-hospice-card-green">
          <div
            className="h-full bg-hospice-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="px-6 md:px-10 py-3 flex items-center justify-between">
          <p className="text-[11px] text-slate-400 hidden sm:block">
            © 2026 Haloes Touch Hospice Inc. Internal training use only.
          </p>

          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <button
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold text-hospice-green-dark disabled:opacity-30 enabled:hover:bg-hospice-card-green transition-colors"
            >
              <ChevronLeft size={18} />
              Prev
            </button>
            <span className="text-sm font-semibold text-slate-500 tabular-nums">
              {index + 1} / {total}
            </span>
            <button
              onClick={() => goTo(index + 1)}
              disabled={index === total - 1}
              className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold text-white bg-hospice-green disabled:opacity-30 enabled:hover:bg-hospice-green-dark transition-colors"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>

          <span className="text-[11px] text-slate-400 hidden md:block">
            Use ← → or Space to navigate
          </span>
        </div>
      </footer>
    </div>
  )
}
