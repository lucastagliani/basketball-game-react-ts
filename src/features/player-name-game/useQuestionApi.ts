import axios from 'axios'
import { GameLevel, Question } from './types'

const BASE_URL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://nba-api-nodejs.herokuapp.com'
    : 'http://localhost:8080'

const useQuestionApi = (level?: GameLevel) => {
  const endpoint = '/questions'
  const params = new URLSearchParams(window.location.search)

  const options = {
    params: {
      level: level || params.get('level'),
    },
  }

  const fetchNewQuestion = async () => {
    try {
      const response = await axios.get<Question>(`${BASE_URL}${endpoint}`, options)
      return response?.data || {}
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return { fetchNewQuestion }
}

export default useQuestionApi
