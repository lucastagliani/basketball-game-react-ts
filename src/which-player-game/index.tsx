import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import Score from '../core-components/score/Score'
import PlayerImage from './PlayerImage'
import { AlternativeOption } from './types'
import useQuestionApi from './useQuestionApi'
import basketballSwish from './sounds/basketball-swish.mp3'
import basketballRim from './sounds/basketball-rim.mp3'
import Timer from '../core-components/timer'
import AnswerOptions from './AnswerOptions'

const getUserAnswerFromEvent = (event: React.MouseEvent<HTMLButtonElement>): number => {
  return parseInt(event.currentTarget.value)
}

const WhichPlayerGame = (): JSX.Element => {
  const [playRightAnswerSound] = useSound(basketballSwish)
  const [playWrongAnswerSound] = useSound(basketballRim)
  const { getNewQuestion } = useQuestionApi()
  const [correctAttempts, setCorrectAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [alternativies, setAlternativies] = useState<AlternativeOption[]>([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

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
    if (!isTimerRunning) {
      setIsTimerRunning(true)
    }
    
    const userAnswer = getUserAnswerFromEvent(event)

    setTotalAttempts(totalAttempts + 1)

    if (userAnswer === correctAnswer) {
      playRightAnswerSound()
      setCorrectAttempts(correctAttempts + 1)
    } else {
      playWrongAnswerSound()
    }

    updateQuestionDisplayed()
  }

  return (
    <div id="which-player-game">
      <h1>What is the name of the player below?</h1>
      <Score
        attempts={totalAttempts}
        correct={correctAttempts}
        textBeforeScore={'Your current score is:'}
      />
      <Timer isRunning={isTimerRunning} />
      <PlayerImage altText="player" playerId={correctAnswer} />
      <AnswerOptions alternativies={alternativies} onAnswerClick={handleOnClick} />
    </div>
  )
}

export default WhichPlayerGame
