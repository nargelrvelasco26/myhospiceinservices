import { useCallback, useEffect, useState } from 'react'
import { GatePage } from './components/GatePage'
import { TopicSelect } from './components/TopicSelect'
import { Presentation } from './components/Presentation'
import { ACCESS_STORAGE_KEY, SESSION_IDLE_TIMEOUT_MS } from './lib/accessConfig'
import type { Topic } from './lib/types'

function App() {
  const [hasAccess, setHasAccess] = useState(
    () => sessionStorage.getItem(ACCESS_STORAGE_KEY) === 'granted',
  )
  const [topic, setTopic] = useState<Topic | null>(null)

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem(ACCESS_STORAGE_KEY)
    sessionStorage.removeItem(`${ACCESS_STORAGE_KEY}-email`)
    setTopic(null)
    setHasAccess(false)
  }, [])

  function handleGateSubmit(email: string) {
    sessionStorage.setItem(ACCESS_STORAGE_KEY, 'granted')
    sessionStorage.setItem(`${ACCESS_STORAGE_KEY}-email`, email)
    setHasAccess(true)
  }

  useEffect(() => {
    if (!hasAccess) return

    let timer: ReturnType<typeof setTimeout>

    function resetTimer() {
      clearTimeout(timer)
      timer = setTimeout(handleLogout, SESSION_IDLE_TIMEOUT_MS)
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        resetTimer()
      }
    }

    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll']
    activityEvents.forEach((evt) => window.addEventListener(evt, resetTimer))
    document.addEventListener('visibilitychange', onVisibilityChange)
    resetTimer()

    return () => {
      clearTimeout(timer)
      activityEvents.forEach((evt) => window.removeEventListener(evt, resetTimer))
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [hasAccess, handleLogout])

  if (!hasAccess) {
    return <GatePage onSubmit={handleGateSubmit} />
  }

  if (!topic) {
    return <TopicSelect onSelect={setTopic} onLogout={handleLogout} />
  }

  return <Presentation topic={topic} onBack={() => setTopic(null)} onLogout={handleLogout} />
}

export default App
