import React from 'react'

import { render, screen } from '@testing-library/react'

import App from './App'
import { renderRootElementForReactModal } from './test-utils'

describe('<App />', () => {
  it('should render header and footer', () => {
    renderRootElementForReactModal()
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
