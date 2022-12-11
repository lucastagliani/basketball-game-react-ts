import { useEffect, useState } from 'react'
import { AlternativeOption } from './types'
import useApi from '../useApi'

export const useQuestion = () => {
  const { fetchNewQuestion } = useApi()

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
