import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '.'

const getButton = (text?: RegExp) => screen.getByRole('button', text ? { name: text } : {})

describe('<Button />', () => {
  const onButtonClickSpy = jest.fn()

  const defaultProps = {
    children: <span>I am a button</span>,
    value: '123',
    onButtonClick: onButtonClickSpy,
  }
  it('should render a button with a text', () => {
    render(<Button {...defaultProps} />)
    expect(getButton(/i am a button/i)).toBeInTheDocument()
  })

  it('should call onButtonClick when button is clicked', () => {
    render(<Button {...defaultProps} />)
    userEvent.click(getButton())

    expect(onButtonClickSpy).toHaveBeenCalledTimes(1)
  })

  it('should render a button with override styles', () => {
    const props = {
      ...defaultProps,
      overrideStyles: {
        backgroundColor: 'red',
      },
    }
    render(<Button {...props} />)
    expect(getButton()).toHaveStyle({ 'background-color': 'red' })
  })

  it('should change color and bgColor when hovered', () => {
    render(<Button {...defaultProps} />)
    userEvent.hover(getButton())
    expect(getButton()).toHaveStyle({
      'background-color': '#555',
      color: 'white',
    })
  })
})
