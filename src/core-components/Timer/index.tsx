import * as React from 'react'

enum Unit {
  Minute,
  Second,
  Milisecond,
}

const unitsParameters = {
  [Unit.Minute]: {
    divisor: 60000,
    modulo: 60,
  },
  [Unit.Second]: {
    divisor: 1000,
    modulo: 60,
  },
  [Unit.Milisecond]: {
    divisor: 10,
    modulo: 100,
  },
}

const formatTimeUnit = (time: number, unit: Unit) => {
  const { divisor, modulo } = unitsParameters[unit]
  const unitTimeAmount = (time / divisor) % modulo
  return ('0' + Math.floor(unitTimeAmount)).slice(-2)
}

const getTimeToDisplay = (time: number) => {
  const minutesToDisplay = formatTimeUnit(time, Unit.Minute)
  const secondsToDisplay = formatTimeUnit(time, Unit.Second)
  const milisecondsToDisplay = formatTimeUnit(time, Unit.Milisecond)

  return { minutesToDisplay, secondsToDisplay, milisecondsToDisplay }
}

const Timer = ({ time }: { time: number }) => {
  const { minutesToDisplay, secondsToDisplay, milisecondsToDisplay } = getTimeToDisplay(time)

  return (
    <span>
      {minutesToDisplay}:{secondsToDisplay}.{milisecondsToDisplay}
    </span>
  )
}

export default Timer
