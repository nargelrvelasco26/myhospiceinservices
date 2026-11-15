import { useState, type FormEvent } from 'react'
import { Mail, KeyRound, ArrowRight } from 'lucide-react'
import hthLogo from '../images/hthlogo.png'
import { isValidAccess } from '../lib/accessConfig'

export function GatePage({
  onSubmit,
}: {
  onSubmit: (email: string) => void
}) {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValidAccess(email, code)) {
      setError('That email and code combination wasn’t recognized. Please check with your supervisor.')
      return
    }
    setError('')
    onSubmit(email.trim())
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-hospice-cream px-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-hospice-green flex items-center justify-center mb-5 p-4">
            <img src={hthLogo} alt="Haloes Touch Hospice" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs font-bold tracking-[0.2em] text-hospice-gold uppercase mb-2">
            Haloes Touch Hospice Inc.
          </p>
          <h1 className="font-serif text-3xl font-bold text-hospice-green-dark mb-3">
            Welcome to Haloes Touch Hospice In-Services
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            These training materials are for Haloes Touch Hospice personnel only.
            Internal training use only — do not copy or distribute.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-hospice-card-green rounded-2xl p-6 shadow-sm space-y-4"
        >
          <div>
            <label className="text-sm font-semibold text-hospice-green-dark block mb-1.5">
              Work email address
            </label>
            <div className="flex items-center gap-2 border border-slate-300 rounded-lg px-3 py-2.5 focus-within:border-hospice-green">
              <Mail className="text-slate-400 shrink-0" size={18} />
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@haloestouchhospice.com"
                className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-hospice-green-dark block mb-1.5">
              In-service code
            </label>
            <div className="flex items-center gap-2 border border-slate-300 rounded-lg px-3 py-2.5 focus-within:border-hospice-green">
              <KeyRound className="text-slate-400 shrink-0" size={18} />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the code provided by your supervisor"
                className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-hospice-green hover:bg-hospice-green-dark transition-colors text-white font-semibold rounded-full py-3"
          >
            Continue to in-service
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          © 2026 Haloes Touch Hospice Inc. Proprietary and confidential.
        </p>
      </div>
    </div>
  )
}
