import React from 'react'
import { render, screen } from '@testing-library/react'
import Link from '.'

describe('<Link />', () => {
  beforeEach(() => {
    const props = {
      url: 'http://google.com.br',
      ariaLabelText: 'Click alt text',
      stylesOverride: { color: 'red' }
    }
    render(<Link {...props} >Click here</Link>)
  })
  it('renders provided text as children', () => {
    expect(screen.getByText('Click here')).toBeInTheDocument()
  })

  it('renders alt text', () => {
    expect(screen.getByLabelText('Click alt text')).toBeInTheDocument()
  })

  it('overrides original style', () => {
    expect(screen.getByRole('link')).toHaveStyle({color: 'red'})
  })
})