import React from 'react'
import { ByRoleOptions, render, screen } from '@testing-library/react'
import PlayerImage from '.'

const getPlayerImage = (options?: ByRoleOptions): HTMLElement => screen.getByRole('img', options)

const defaultProps = {
  altText: 'player image',
  playerId: 123,
}

describe('<PlayerImage />', () => {
  it('should render player image with passed altText', () => {
    render(<PlayerImage {...defaultProps} />)
    expect(getPlayerImage({ name: 'player image' })).toBeInTheDocument()
  })

  it('should render player image with built src', () => {
    render(<PlayerImage {...defaultProps} />)
    const expectedSrc = 'https://cdn.nba.com/headshots/nba/latest/1040x760/123.png'
    expect(getPlayerImage().getAttribute('src')).toBe(expectedSrc)
  })

  it('should render player image with passed className', () => {
    render(<PlayerImage {...defaultProps} className="my-custom-class-name" />)
    expect(getPlayerImage().getAttribute('class')).toBe('my-custom-class-name')
  })

  it('should render player image with passed styles', () => {
    render(<PlayerImage {...defaultProps} overrideStyles={{ border: '1px solid red' }} />)
    expect(getPlayerImage()).toHaveStyle({ border: '1px solid red' })
  })

  it('should not render player image if playedId is invalid', () => {
    render(<PlayerImage {...defaultProps} playerId={0} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
