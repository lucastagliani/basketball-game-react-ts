import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckoutCodeText from './CheckoutCodeText'

describe('<CheckoutCodeText />', () => {
  beforeEach(() => {
    render(<CheckoutCodeText />)
  })

  it('renders pre text', () => {
    expect(screen.getByText(/checkout the code behind:/i)).toBeInTheDocument()
  })

  it('renders UI repo link', () => {
    expect(screen.getByRole('link', { name: 'UI' })).toHaveAttribute(
      'href',
      'https://github.com/lucastagliani/basketball-game-react-ts',
    )
  })

  it('renders API repo link', () => {
    expect(screen.getByRole('link', { name: 'API' })).toHaveAttribute(
      'href',
      'https://github.com/lucastagliani/nba-api-nodejs',
    )
  })
})
