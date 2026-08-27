import { useEffect, useState } from 'react'

export function useLocalTime(timeZone = 'Asia/Kolkata') {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-IN', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          }).format(new Date()),
        )
      } catch {
        setTime('')
      }
    }

    format()
    const id = window.setInterval(format, 30000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}
