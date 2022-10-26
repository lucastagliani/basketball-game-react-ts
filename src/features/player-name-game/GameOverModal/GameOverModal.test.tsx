import React from 'react'
import { render, screen } from '@testing-library/react'
import GameOverModal from '.'

describe('<GameOverModal />', () => {
  beforeEach(() => {
    const props = {
      isModalOpen: true,
      correctAttempts: 4,
      totalAttempts: 5,
      handleCloseButtonClick: jest.fn(),
    }

    render(<GameOverModal {...props} />)
  })

  it('should render modal title', () => {
    expect(screen.getByText('The game is over!')).toBeInTheDocument()
  })

  it('should render score text correctly', () => {
    expect(screen.getByText('You scored 4 out of 5')).toBeInTheDocument()
  })

  it('should render modal button', () => {
    expect(screen.getByRole('button', { name: 'Play again!' })).toBeInTheDocument()
  })
})
