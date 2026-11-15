import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist/types/src/display/api'
import workerSrc from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

export function PdfViewer({
  url,
  page,
  onLoad,
}: {
  url: string
  page: number
  onLoad?: (numPages: number) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const docRef = useRef<PDFDocumentProxy | null>(null)
  const renderTaskRef = useRef<RenderTask | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    const loadingTask = pdfjsLib.getDocument({ url })
    loadingTask.promise
      .then((pdf) => {
        if (cancelled) return
        docRef.current = pdf
        onLoad?.(pdf.numPages)
        setLoading(false)
      })
      .catch((err) => {
        if (cancelled) return
        console.error('Failed to load PDF', err)
        setError(err instanceof Error ? err.message : 'Failed to load PDF')
        setLoading(false)
      })
    return () => {
      cancelled = true
      docRef.current = null
      loadingTask.promise
        .then(() => loadingTask.destroy())
        .catch(() => loadingTask.destroy())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  useEffect(() => {
    if (loading) return
    let cancelled = false

    async function render() {
      const pdf = docRef.current
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!pdf || !canvas || !container) return

      const pageProxy = await pdf.getPage(page)
      if (cancelled) return

      const baseViewport = pageProxy.getViewport({ scale: 1 })
      const scale = Math.min(
        container.clientWidth / baseViewport.width,
        (container.clientHeight || container.clientWidth * 0.75) / baseViewport.height,
      )
      const viewport = pageProxy.getViewport({ scale: scale > 0 ? scale : 1 })

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      canvas.width = viewport.width
      canvas.height = viewport.height

      renderTaskRef.current?.cancel()
      const task = pageProxy.render({ canvasContext: ctx, viewport, canvas })
      renderTaskRef.current = task
      try {
        await task.promise
      } catch (err) {
        if (cancelled) return
        const message = err instanceof Error ? err.message : String(err)
        if (message.toLowerCase().includes('cancel')) return
        console.error('Failed to render PDF page', err)
        setError(message)
      }
    }

    render()
    return () => {
      cancelled = true
      renderTaskRef.current?.cancel()
    }
  }, [page, loading])

  return (
    <div
      ref={containerRef}
      onContextMenu={(e) => e.preventDefault()}
      className="w-full h-full flex items-center justify-center select-none"
    >
      {error ? (
        <p className="text-sm text-red-600 max-w-md text-center px-4">
          Couldn&apos;t load the PDF. {error}
        </p>
      ) : loading ? (
        <p className="text-sm text-slate-500">Loading PDF…</p>
      ) : (
        <canvas ref={canvasRef} className="max-w-full max-h-full shadow-lg" />
      )}
    </div>
  )
}
