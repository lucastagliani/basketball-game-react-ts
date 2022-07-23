import React, { useEffect, useState } from 'react'
import Button from '../core-components/button/Button'
import Score from '../core-components/score/Score'
import PlayerImage from './PlayerImage'
import { AlternativeOption } from './types'
import useQuestionApi from './useQuestionApi'

const getUserAnswerFromEvent = (event: React.MouseEvent<HTMLButtonElement>): number => {
  return parseInt(event.currentTarget.value)
}

const WhichPlayerGame = (): JSX.Element => {
  const { getNewQuestion } = useQuestionApi()
  const [correctAttempts, setCorrectAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [alternativies, setAlternativies] = useState<AlternativeOption[]>([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNewQuestion()
      if (data) {
        setCorrectAnswer(data.correctAnswerKey)
        setAlternativies(data.alternativeOptions)
      }
    }

    fetchData()
  }, [])

  const updateQuestionDisplayed = async () => {
    const { data } = await getNewQuestion()
    if (data) {
      setCorrectAnswer(data.correctAnswerKey)
      setAlternativies(data.alternativeOptions)
    }
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const userAnswer = getUserAnswerFromEvent(event)

    setTotalAttempts(totalAttempts + 1)

    if (userAnswer === correctAnswer) {
      setCorrectAttempts(correctAttempts + 1)
    }

    updateQuestionDisplayed()
  }

  return (
    <div id="which-player-game">
      <h1>Which basketball player is this?</h1>
      <Score
        attempts={totalAttempts}
        correct={correctAttempts}
        textBeforeScore={'Your current score is:'}
      />
      <PlayerImage altText="player" playerId={correctAnswer} />
      <div>
        {alternativies.map(alternative => {
          return (
            <Button
              key={alternative.key}
              value={alternative.key.toString()}
              text={alternative.value.toString()}
              onButtonClick={handleOnClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WhichPlayerGame
