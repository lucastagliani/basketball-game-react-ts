import axios from 'axios'

import { GameLevel, Player, Question } from './player-name-game/types'

const BASE_URL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://nba-api-nodejs.onrender.com'
    : 'http://localhost:8080'

const useApi = (level?: GameLevel) => {
  const fetchNewQuestion = async () => {
    const endpoint = '/questions'
    const params = new URLSearchParams(window.location.search)

    const options = {
      params: {
        level: level || params.get('level'),
      },
    }

    try {
      const response = await axios.get<Question>(`${BASE_URL}${endpoint}`, options)
      return response?.data || {}
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const fetchPlayers = async () => {
    const endpoint = '/players'
    const filter = '?min_lastYear=1995&min_score=40'
    try {
      const response = await axios.get<Player>(`${BASE_URL}${endpoint}${filter}`)
      return response?.data || {}
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return { fetchNewQuestion, fetchPlayers }
}

export default useApi
