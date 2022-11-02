import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlayerNameGame from '.'
import { questionsApiMockedData } from './__mocks__/questionsApiMockedData'

jest.mock('axios', () => ({
  get: () => {
    return {
      data: questionsApiMockedData,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    }
  },
}))

const trackSpy = jest.fn()

jest.mock('../useTrackingService', () => {
  return jest.fn(() => ({
    track: trackSpy,
  }))
})

const getRightAnswerButton = () => screen.getByText('Nikola Jokic')
const getWrongAnswerButton = () => screen.getByText('Franz Wagner')

describe('<PlayerNameGame />', () => {
  it('should render a game title', async () => {
    render(<PlayerNameGame />)
    const gameTitle = screen.getByRole('heading', {
      name: 'What is the name of the player below?',
    })
    await waitFor(() => {
      expect(gameTitle).toBeInTheDocument()
    })
  })

  it('should render a player picture', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      expect(screen.getByRole('img', { name: 'player' })).toBeInTheDocument()
    })
  })

  it('should render 4 possible answers', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBe(4)
    })
  })

  it('should give visual feedback to user when answer is right', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      userEvent.click(getRightAnswerButton())
    })
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
  })

  it('should give visual feedback to user when answer is incorrect', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      userEvent.click(getWrongAnswerButton())
    })
    expect(screen.getByText('0 / 1')).toBeInTheDocument()
  })

  it('should track user answer', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      userEvent.click(getWrongAnswerButton())
    })
    expect(trackSpy).toBeCalledTimes(1)
    expect(trackSpy).toBeCalledWith('user_answer', {
      is_correct: false,
      attempt_number: 1,
    })
  })

  it('should track user end game after 5 attempts (2 corrects)', async () => {
    render(<PlayerNameGame />)
    const userAnswers = [
      'Nikola Jokic',
      'John Collins',
      'Franz Wagner',
      'Kawhi Leonard',
      'Nikola Jokic',
    ]

    await waitFor(() => {
      userAnswers.forEach(userAnswer => {
        userEvent.click(screen.getByText(userAnswer))
      })
    })

    expect(trackSpy).toBeCalledWith('end_game', {
      total_right_answers: 2,
      total_answers: 5,
    })
  })
})
