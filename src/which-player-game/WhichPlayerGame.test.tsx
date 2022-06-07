import React from 'react'
import { render, screen } from '@testing-library/react'
import WhichPlayerGame from './WhichPlayerGame'

describe('<WhichPlayerGame />', () => {
  it('should render a game title', () => {
    render(<WhichPlayerGame />)
    expect(screen.getByRole('heading', { name: 'Which basketball player is this?' })).toBeInTheDocument()
  })

  it('should render a player picture', () => {
    render(<WhichPlayerGame />)
    expect(screen.getByRole('img', { name: 'Player' })).toBeInTheDocument()
  })

  it('should render 4 possible answers', () => {
    render(<WhichPlayerGame />)
    expect(screen.getAllByRole('button').length).toBe(4)
  })
})
