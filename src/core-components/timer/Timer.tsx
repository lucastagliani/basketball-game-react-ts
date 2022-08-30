import * as React from 'react'
import { useEffect, useState } from 'react'

type TimerProps = {
  isRunning?: boolean
  initialTime?: number
}

const getTimeToDisplay = (time: number) => {
  const minutesToDisplay = ('0' + Math.floor((time / 60000) % 60)).slice(-2)
  const secondsToDisplay = ('0' + Math.floor((time / 1000) % 60)).slice(-2)
  const milisecondsToDisplay = ((time / 10) % 100).toString()

  return { minutesToDisplay, secondsToDisplay, milisecondsToDisplay }
}

const Timer = ({ isRunning = false, initialTime }: TimerProps) => {
  const [time, setTime] = useState(initialTime ?? 0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 100)
      }, 100)
    } else if (interval) {
      clearInterval(interval)
    }
  }, [isRunning])

  const { minutesToDisplay, secondsToDisplay, milisecondsToDisplay } = getTimeToDisplay(time)

  return (
    <div>
      <span>
        {minutesToDisplay}:{secondsToDisplay}.{milisecondsToDisplay}
      </span>
    </div>
  )
}

export default Timer
