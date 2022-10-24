import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import { AlternativeOption } from './types'
import useQuestionApi from './useQuestionApi'
import basketballSwish from './sounds/basketball-swish.mp3'
import basketballRim from './sounds/crowd-booing.mp3'

const ATTEMPTS_PER_GAME = 5

const usePlayerNameGameService = () => {
  const { fetchNewQuestion } = useQuestionApi()

  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [alternativies, setAlternativies] = useState<AlternativeOption[]>([])

  const [playRightAnswerSound] = useSound(basketballSwish)
  const [playWrongAnswerSound] = useSound(basketballRim, { interrupt: true })

  const [correctAttempts, setCorrectAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getNewQuestion = async () => {
    const { correctAnswerKey, alternativeOptions } = await fetchNewQuestion()
    setCorrectAnswer(correctAnswerKey)
    setAlternativies(alternativeOptions)
  }

  const answerQuestion = (userAnswer: number) => {
    if (!isTimerRunning) {
      setIsTimerRunning(true)
    }

    if (userAnswer === correctAnswer) {
      playRightAnswerSound()
      setCorrectAttempts(correctAttempts + 1)
    } else {
      playWrongAnswerSound()
    }

    if (totalAttempts === ATTEMPTS_PER_GAME - 1) {
      setIsTimerRunning(false)
      setIsModalOpen(true)
    }

    setTotalAttempts(totalAttempts + 1)
  }

  useEffect(() => {
    getNewQuestion()
  }, [])

  return {
    totalAttempts,
    correctAttempts,
    isTimerRunning,
    isModalOpen,
    setIsModalOpen,
    correctAnswer,
    alternativies,
    answerQuestion,
    getNewQuestion,
  }
}

export default usePlayerNameGameService
