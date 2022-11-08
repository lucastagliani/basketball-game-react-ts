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

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

    const newTotalAttempts = totalAttempts + 1
    const isCorrect = isAnswerCorrect(newUserAnswer)

    track('user_answer', {
      is_correct: isCorrect,
      attempt_number: newTotalAttempts,
    })

    if (isCorrect) {
      setCorrectAttempts(correctAttempts + 1)
      playRightAnswerSound()
    } else {
      playWrongAnswerSound()
    }

    setTotalAttempts(newTotalAttempts)
  }

  const resetGame = () => {
    setIsTimerRunning(false)
    setCorrectAttempts(0)
    setTotalAttempts(0)
    setIsModalOpen(false)
  }

  useEffect(() => {
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
    resetGame,
  }
}

export default useGame
