import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WhichPlayerGame from './WhichPlayerGame'

describe('<WhichPlayerGame />', () => {
  it('should render a game title', async () => {
    render(<WhichPlayerGame />)
    const gameTitle = screen.getByRole('heading', {
      name: 'Which basketball player is this?',
    })
    await waitFor(() => {
      expect(gameTitle).toBeInTheDocument()
    })
  })

  it('should render a player picture', async () => {
    render(<WhichPlayerGame />)
    const playerImage = screen.getByRole('img', { name: 'player' })
    await waitFor(() => {
      expect(playerImage).toBeInTheDocument()
      // expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  xit('should render 4 possible answers', () => {
    render(<WhichPlayerGame />)
    expect(screen.getAllByRole('button').length).toBe(4)
  })

  xit('should give feedback to user when answer is right', () => {
    // TODO: mock data from API
    render(<WhichPlayerGame />)
    const rightAnswer = screen.getByText('James Harden')
    userEvent.click(rightAnswer)
    expect(rightAnswer).toHaveStyle({
      border: '4px solid green',
    })
  })

  xit('should give feedback to user when answer is incorrect', () => {
    // TODO: mock data from API
    render(<WhichPlayerGame />)
    const rightAnswer = screen.getByText('Devin Booker')
    userEvent.click(rightAnswer)
    expect(rightAnswer).toHaveStyle({
      border: '4px solid red',
    })
  })
})
