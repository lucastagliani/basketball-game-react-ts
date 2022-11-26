import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Link from '.'

const trackSpy = jest.fn()

jest.mock('../../features/useTrackUserAction', () => {
  return jest.fn(() => ({
    track: trackSpy,
  }))
})

describe('<Link />', () => {
  beforeEach(() => {
    const props = {
      url: 'http://google.com.br',
      ariaLabelText: 'Click alt text',
      stylesOverride: { color: 'red' },
    }
    render(<Link {...props}>Click here</Link>)
  })

  it('renders provided text as children', () => {
    expect(screen.getByText('Click here')).toBeInTheDocument()
  })

  it('renders alt text', () => {
    expect(screen.getByLabelText('Click alt text')).toBeInTheDocument()
  })

  it('overrides original style', () => {
    expect(screen.getByRole('link')).toHaveStyle({ color: 'red' })
  })

  it('calls track action with link_click when clicked', () => {
    userEvent.click(screen.getByRole('link'))
    expect(trackSpy).toHaveBeenCalledTimes(1)
    expect(trackSpy).toHaveBeenCalledWith('link_click', {
      aria_label: 'Click alt text',
      url: 'http://google.com.br',
    })
  })
})
