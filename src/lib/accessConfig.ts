// Simple front-door gate for an internal, unauthenticated static site.
// This is NOT real authentication or access control - do not rely on it to
// protect sensitive information. Add one entry per staff member/code below.
export const ACCESS_CREDENTIALS: { email: string; code: string }[] = [
  { email: 'nargel.velasco@haloestouch.com', code: 'HTH12345' },
  { email: 'annatobes12345@gmail.com', code: 'HTH26050' },
  { email: 'jasmin.velasco@haloestouch.com', code: 'HTH24003' },
  { email: 'marivic.eleno@haloestouch.com', code: 'HTH24002' },
]

export function isValidAccess(email: string, code: string): boolean {
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedCode = code.trim()
  return ACCESS_CREDENTIALS.some(
    (entry) =>
      entry.email.toLowerCase() === normalizedEmail &&
      entry.code === normalizedCode,
  )
}

export const ACCESS_STORAGE_KEY = 'haloes-touch-inservice-access'

// Automatically sign out after this many milliseconds of no mouse, keyboard,
// touch or scroll activity (and the tab being in the foreground).
export const SESSION_IDLE_TIMEOUT_MS = 20 * 60 * 1000
