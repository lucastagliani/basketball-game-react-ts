import React from 'react'
import { render, screen } from '@testing-library/react'
import GameOverModal from '.'

describe('<GameOverModal />', () => {
  it('should render score text correctly', () => {
    const props = {
      isModalOpen: true,
      correctAttempts: 4,
      totalAttempts: 5,
    }

    render(<GameOverModal {...props} />)
    expect(screen.getByText('You scored 4 out of 5')).toBeInTheDocument()
  })
})
