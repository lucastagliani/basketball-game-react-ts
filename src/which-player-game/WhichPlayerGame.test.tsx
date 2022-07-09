import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WhichPlayerGame from './WhichPlayerGame'

describe('<WhichPlayerGame />', () => {
  it('should render a game title', () => {
    render(<WhichPlayerGame />)
    expect(screen.getByRole('heading', { name: 'Which basketball player is this?' })).toBeInTheDocument()
  })

  it('should render a player picture', () => {
    render(<WhichPlayerGame />)
    expect(screen.getByRole('img', { name: 'player' })).toBeInTheDocument()
  })

  it('should render 4 possible answers', () => {
    render(<WhichPlayerGame />)
    expect(screen.getAllByRole('button').length).toBe(4)
  })

  it('should give feedback to user when answer is right', () => {
    // TODO: mock data from API
    render(<WhichPlayerGame />)
    const rightAnswer = screen.getByText('James Harden')
    userEvent.click(rightAnswer)
    expect(rightAnswer).toHaveStyle({
      border: '4px solid green',
    })
  })

  it('should give feedback to user when answer is incorrect', () => {
    // TODO: mock data from API
    render(<WhichPlayerGame />)
    const rightAnswer = screen.getByText('Devin Booker')
    userEvent.click(rightAnswer)
    expect(rightAnswer).toHaveStyle({
      border: '4px solid red',
    })
  })
})
