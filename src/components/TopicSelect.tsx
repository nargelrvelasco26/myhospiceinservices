import { useState } from 'react'
import { ArrowRight, Clock, LogOut, Search, X } from 'lucide-react'
import type { Topic } from '../lib/types'
import { topics } from '../data/topics'
import { Icon } from './Icon'
import hthLogo from '../images/hthlogo.png'

export function TopicSelect({
  onSelect,
  onLogout,
}: {
  onSelect: (topic: Topic) => void
  onLogout: () => void
}) {
  const [query, setQuery] = useState('')

  const filteredTopics = topics.filter((topic) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen w-screen bg-hospice-cream px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-2">
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-hospice-green-dark transition-colors"
          >
            <LogOut size={14} />
            Log out
          </button>
        </div>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-24 h-24 rounded-full bg-hospice-green flex items-center justify-center mb-5 p-4">
            <img src={hthLogo} alt="Haloes Touch Hospice" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs font-bold tracking-[0.2em] text-hospice-gold uppercase mb-2">
            Haloes Touch Hospice Inc.
          </p>
          <h1 className="font-serif text-3xl font-bold text-hospice-green-dark mb-3">
            In-Service Topics
          </h1>
          <p className="text-sm text-slate-600 max-w-md">
            Choose a topic below to begin the staff in-service presentation.
          </p>
        </div>

        <div className="max-w-sm mx-auto mb-8">
          <div className="flex items-center gap-2 bg-white border border-hospice-card-green rounded-full px-4 py-2.5 focus-within:border-hospice-green">
            <Search className="text-slate-400 shrink-0" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics"
              className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-hospice-green-dark shrink-0"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {filteredTopics.length === 0 ? (
          <p className="text-center text-sm text-slate-500">
            No topics match “{query}”.
          </p>
        ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {filteredTopics.map((topic) => {
            const available = topic.status === 'available'
            return (
              <button
                key={topic.id}
                onClick={() => available && onSelect(topic)}
                disabled={!available}
                className={`text-left bg-white border border-hospice-card-green rounded-2xl p-6 shadow-sm transition-colors ${
                  available
                    ? 'hover:border-hospice-green cursor-pointer'
                    : 'opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-hospice-card-green flex items-center justify-center mb-4">
                  <Icon name={topic.icon} className="text-hospice-green-dark" size={22} />
                </div>
                <h2 className="font-serif text-lg font-bold text-hospice-green-dark mb-1.5">
                  {topic.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {topic.description}
                </p>

                {available ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-hospice-green">
                    Start in-service
                    <ArrowRight size={16} />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400">
                    <Clock size={16} />
                    Coming soon
                  </span>
                )}
              </button>
            )
          })}
        </div>
        )}
      </div>
    </div>
  )
}
