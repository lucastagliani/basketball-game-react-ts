import React from 'react'
import { render, screen } from '@testing-library/react'
import EndGameModal from '.'
import userEvent from '@testing-library/user-event'
import { renderRootElementForReactModal } from '../../../test-utils'

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
      onButtonClick: jest.fn(),
    }

    renderRootElementForReactModal()
    render(<EndGameModal {...props} />)
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
