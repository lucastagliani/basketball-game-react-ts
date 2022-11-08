import { useEffect, useState } from 'react'

let interval: NodeJS.Timeout

type TimerProps = {
  isRunning?: boolean
  initialTime?: number
}

export const useTimer = ({ initialTime = 0 }: TimerProps) => {
  const [time, setTime] = useState(initialTime)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 100)
      }, 100)
    } else if (interval) {
      clearInterval(interval)
    }
  }, [isTimerRunning])

  return { time, setTime, isTimerRunning, setIsTimerRunning }
}
