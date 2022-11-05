import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import useTrackUserAction from '../useTrackUserAction'
import basketballSwish from './sounds/basketball-swish.mp3'
import basketballRim from './sounds/crowd-booing.mp3'
import { useQuestion } from './useQuestion'

const ATTEMPTS_PER_GAME = 5

const hasReachedTotalAttempts = (totalAttempts: number) => totalAttempts === ATTEMPTS_PER_GAME

const useGame = () => {
  const { track } = useTrackUserAction()
  const { alternativies, correctAnswer, isAnswerCorrect, getNewQuestion } = useQuestion()

  const [playRightAnswerSound] = useSound(basketballSwish, { volume: 0.4 })
  const [playWrongAnswerSound] = useSound(basketballRim, { interrupt: true, volume: 0.2 })

  const [correctAttempts, setCorrectAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [userAnswer, setUserAnswer] = useState(0)

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const checkUserAnswer = () => {
    if (userAnswer === 0) {
      return
    }

    const isCorrect = isAnswerCorrect(userAnswer)
    track('user_answer', {
      is_correct: isCorrect,
      attempt_number: totalAttempts,
    })

    if (isCorrect) {
      playRightAnswerSound()
    } else {
      playWrongAnswerSound()
    }
  }

  const checkEndGame = () => {
    if (hasReachedTotalAttempts(totalAttempts)) {
      track('end_game', {
        total_right_answers: correctAttempts,
        total_answers: totalAttempts,
      })
      setIsTimerRunning(false)
      setIsModalOpen(true)
    }
  }

  const answerQuestion = (newUserAnswer: number) => {
    if (!isTimerRunning) {
      setIsTimerRunning(true)
    }

    if (isAnswerCorrect(newUserAnswer)) {
      setCorrectAttempts(correctAttempts + 1)
    }

    setUserAnswer(newUserAnswer)
    setTotalAttempts(totalAttempts + 1)
  }

  useEffect(() => {
    checkUserAnswer()
    checkEndGame()
  }, [totalAttempts])

  return {
    totalAttempts,
    correctAttempts,
    isTimerRunning,
    isModalOpen,
    answerQuestion,
    alternativies,
    correctAnswer,
    getNewQuestion,
  }
}

export default useGame
