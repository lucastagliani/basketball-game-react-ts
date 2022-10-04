import * as React from 'react'
import { useEffect, useState } from 'react'

enum Unit {
  Minute,
  Second,
  Milisecond
}

type TimerProps = {
  isRunning?: boolean
  initialTime?: number
}

const unitsParameters = {
  [Unit.Minute]: {
    divisor: 60000, 
    modulo: 60
  },
  [Unit.Second]: {
    divisor: 1000, 
    modulo: 60
  },
  [Unit.Milisecond]: {
    divisor: 10, 
    modulo: 100
  },
}

const formatTimeUnit = (time: number, unit: Unit) => {
  const {divisor, modulo} = unitsParameters[unit]
  const unitTimeAmount = (time / divisor) % modulo
  console.log('unit, unitTimeAmount :>> ', unit.toString(), unitTimeAmount)
  return ('0' + Math.floor(unitTimeAmount)).slice(-2)
}

const getTimeToDisplay = (time: number) => {
  const minutesToDisplay = formatTimeUnit(time, Unit.Minute)
  const secondsToDisplay = formatTimeUnit(time, Unit.Second)
  const milisecondsToDisplay = formatTimeUnit(time, Unit.Milisecond)

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
