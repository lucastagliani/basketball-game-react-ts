import React from 'react'
import { render, screen } from '@testing-library/react'
import SocialMedia from './SocialMedia'

describe.skip('<SocialMedia />', () => {
  it('should render all provided social media icons', () => {
    const items = [
      {
        faCode: 'github',
        url: 'https://github.com/lucastagliani'
      },
      {
        faCode: 'linkedin',
        url: 'https://www.linkedin.com/in/lucastagliani/'
      },
      {
        faCode: 'medium',
        url: 'https://medium.com/@lucastagliani'
      },
    ]
    render(<SocialMedia items={items}/>)
    expect(screen.getAllByRole('link').length).toBe(3)
  })
})