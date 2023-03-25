import axios from 'axios'
import { Question } from './types'

const BASE_URL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://nba-api-nodejs.onrender.com'
    : 'http://localhost:8080'

const useQuestionApi = () => {
  const endpoint = '/questions'

  const fetchNewQuestion = async () => {
    try {
      const response = await axios.get<Question>(`${BASE_URL}${endpoint}`)
      return response?.data || {}
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return { fetchNewQuestion }
}

export default useQuestionApi
