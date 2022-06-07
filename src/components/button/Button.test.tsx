import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

const getButton = (text?: RegExp) => screen.getByRole('button', text ? { name: text } : {})

describe('<Button />', () => {
  const onButtonClickSpy = jest.fn()

  const defaultProps = {
    text: 'I am a button',
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
})
