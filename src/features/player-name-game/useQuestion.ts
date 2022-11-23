import { useEffect, useState } from 'react'
import { AlternativeOption, GameLevel } from './types'
import useQuestionApi from './useQuestionApi'

export const useQuestion = (level: GameLevel) => {
  const { fetchNewQuestion } = useQuestionApi(level)

  const [alternativies, setAlternativies] = useState<AlternativeOption[]>([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)

  const isAnswerCorrect = (userAnswer: number) => userAnswer === correctAnswer

  const getNewQuestion = async () => {
    const { correctAnswerKey, alternativeOptions } = await fetchNewQuestion()
    setCorrectAnswer(correctAnswerKey)
    setAlternativies(alternativeOptions)
  }

  useEffect(() => {
    getNewQuestion()
  }, [])

  return {
    alternativies,
    correctAnswer,
    isAnswerCorrect,
    getNewQuestion,
  }
}
