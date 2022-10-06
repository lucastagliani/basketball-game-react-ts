import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('<Footer />', () => {
  it('should render copy right text', () => {
    render(<Footer />)
    expect(screen.getByText('Copyright @ Lucas Tagliani Aguiar')).toBeInTheDocument()
  })
})