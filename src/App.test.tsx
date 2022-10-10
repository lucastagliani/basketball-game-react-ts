import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'


describe.skip('<App />', () => {
  it('should render header', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should render footer', () => {
    const {container} = render(<App />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
