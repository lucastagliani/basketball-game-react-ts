import React from 'react'
import { render, screen } from '@testing-library/react'
import GameOverModal from '.'
import userEvent from '@testing-library/user-event'

const trackSpy = jest.fn()

jest.mock('../../useTrackingService', () => {
  return jest.fn(() => ({
    track: trackSpy,
  }))
})

describe('<GameOverModal />', () => {
  beforeEach(() => {
    const props = {
      isModalOpen: true,
      correctAttempts: 4,
      totalAttempts: 5,
      onButtonClick: jest.fn(),
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

  it('calls track with play_again when button clicked', () => {
    userEvent.click(screen.getByRole('button'))
    expect(trackSpy).toHaveBeenCalledTimes(1)
    expect(trackSpy).toHaveBeenCalledWith('play_again', {
      total_answers: 5,
      total_right_answers: 4,
    })
  })
})
