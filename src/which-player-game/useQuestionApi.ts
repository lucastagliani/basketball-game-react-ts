import axios from 'axios'
import { Question } from './types'

const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8080'
    : 'https://nba-api-nodejs.herokuapp.com'

const useQuestionApi = () => {
  const endpoint = '/questions'

  const getNewQuestion = async () => {
    try {
      const response = await axios.get<Question>(`${BASE_URL}${endpoint}`)
      return response
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return { getNewQuestion }
}

export default useQuestionApi
