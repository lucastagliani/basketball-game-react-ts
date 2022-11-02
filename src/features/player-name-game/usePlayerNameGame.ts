import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import { AlternativeOption } from './types'
import useQuestionApi from './useQuestionApi'
import useTrackUserAction from '../useTrackUserAction'
import basketballSwish from './sounds/basketball-swish.mp3'
import basketballRim from './sounds/crowd-booing.mp3'

const ATTEMPTS_PER_GAME = 5

const hasReachedTotalAttempts = (totalAttempts: number) => totalAttempts === ATTEMPTS_PER_GAME

const usePlayerNameGame = () => {
  const { fetchNewQuestion } = useQuestionApi()
  const { track } = useTrackUserAction()

  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const [alternativies, setAlternativies] = useState<AlternativeOption[]>([])

  const [playRightAnswerSound] = useSound(basketballSwish, { volume: 0.4 })
  const [playWrongAnswerSound] = useSound(basketballRim, { interrupt: true, volume: 0.2 })

  const [correctAttempts, setCorrectAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [userAnswer, setUserAnswer] = useState(0)

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getNewQuestion = async () => {
    const { correctAnswerKey, alternativeOptions } = await fetchNewQuestion()
    setCorrectAnswer(correctAnswerKey)
    setAlternativies(alternativeOptions)
  }

  const checkUserAnswer = () => {
    if (userAnswer === 0 || correctAnswer === 0) {
      return
    }

    const isRightAnswer = userAnswer === correctAnswer
    track('user_answer', {
      is_correct: isRightAnswer,
      attempt_number: totalAttempts,
    })

    if (isRightAnswer) {
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

    if (newUserAnswer === correctAnswer) {
      setCorrectAttempts(correctAttempts + 1)
    }

    setUserAnswer(newUserAnswer)
    setTotalAttempts(totalAttempts + 1)
  }

  useEffect(() => {
    getNewQuestion()
  }, [])

  useEffect(() => {
    checkUserAnswer()
    checkEndGame()
  }, [totalAttempts])

  return {
    totalAttempts,
    correctAttempts,
    isTimerRunning,
    isModalOpen,
    correctAnswer,
    alternativies,
    answerQuestion,
    getNewQuestion,
  }
}

export default usePlayerNameGame
