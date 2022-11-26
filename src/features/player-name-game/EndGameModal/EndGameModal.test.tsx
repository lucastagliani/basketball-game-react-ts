import React from 'react'

import { render, screen } from '@testing-library/react'

import EndGameModal from '.'
import { renderRootElementForReactModal } from '../../../test-utils'
import userEvent from '@testing-library/user-event'

const trackSpy = jest.fn()

jest.mock('../../useTrackUserAction', () => {
  return jest.fn(() => ({
    track: trackSpy,
  }))
})

describe('<EndGameModal />', () => {
  beforeEach(() => {
    const props = {
      isModalOpen: true,
      correctAttempts: 4,
      totalAttempts: 5,
      time: 0,
      onButtonClick: jest.fn(),
    }

    renderRootElementForReactModal()
    render(<EndGameModal {...props} />)
  })

  it('should render modal title', () => {
    expect(screen.getByText('The game has ended!')).toBeInTheDocument()
  })

  it('should render score text and time correctly', () => {
    expect(screen.getByText(/you scored 4 out of 5/i)).toBeInTheDocument()
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
