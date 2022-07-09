import React, { useState } from 'react'
import Button from '../core-components/button/Button'
import PlayerImage from './PlayerImage'

const getNewQuestion = () => ({
  correctAnswerKey: 1628391,
  image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628391.png',
  alternativeOptions: [],
})

const WhichPlayerGame = () => {
  const [alternativies, setAlternativies] = useState([{ key: 201935, value: 'James Harden' }, { key: 1626164, value: 'Devin Booker' }, { key: 202710, value: 'Jimmy Butler' }, { key: 203076, value: 'Antonhy Davis' }])
  const [rightAnswer, setRightAnswer] = useState(201935)
  const [userAnswer, setUserAnswer] = useState()

  const handleOnClick = (event: any) => {
    setUserAnswer(event.target.value)

    const newQuestion = getNewQuestion()
    setRightAnswer(newQuestion.correctAnswerKey)
    setAlternativies(newQuestion.alternativeOptions)
    // get new player, setAlternativies, setRightAnswer
  }

  return (
    <div>
      <h1>Which basketball player is this?</h1>
      <PlayerImage altText="player" playerId={rightAnswer} />
      <div>
        {alternativies.map((a) => {
          let stylesToOverride
          if (!!userAnswer && a.key === userAnswer) {
            stylesToOverride = {
              border: `4px solid ${rightAnswer === userAnswer ? 'green' : 'red'}`,
            }
          }

          return (
            <Button
              key={a.key}
              value={a.key.toString()}
              text={a.value.toString()}
              onButtonClick={handleOnClick}
              overrideStyles={stylesToOverride}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WhichPlayerGame
