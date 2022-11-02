import React from 'react'
import { render, screen } from '@testing-library/react'
import BrandIconWithLink from '.'

describe('<BrandIconWithLink />', () => {
  it('should render link with aria label provided', () => {
    const props = {
      faCode: 'github',
      ariaLabelText: 'Github',
      url: 'http://github.com',
    }
    render(<BrandIconWithLink {...props} />)
    expect(screen.getByRole('link', { name: 'Github' })).toBeInTheDocument()
  })
})
