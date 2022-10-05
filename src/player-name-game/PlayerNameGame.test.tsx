import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlayerNameGame from '.'
import { questionsApiMockedData } from './questionsApiMockedData'

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

describe('<WhichPlayerGame />', () => {
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
    const playerImage = screen.getByRole('img', { name: 'player' })
    await waitFor(() => {
      expect(playerImage).toBeInTheDocument()
    })
  })
  it('should render 4 possible answers', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBe(4)
    })
  })
  it('should give feedback to user when answer is right', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      const rightAnswer = screen.getByText('Nikola Jokic')
      userEvent.click(rightAnswer)
      expect(screen.getByText('1 / 1')).toBeInTheDocument()
    })
  })
  it('should give feedback to user when answer is incorrect', async () => {
    render(<PlayerNameGame />)
    await waitFor(() => {
      const rightAnswer = screen.getByText('Kawhi Leonard')
      userEvent.click(rightAnswer)
      expect(screen.getByText('0 / 1')).toBeInTheDocument()
    })
  })
})
