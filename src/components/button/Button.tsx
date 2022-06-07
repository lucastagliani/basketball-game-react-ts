import React from 'react'

interface ButtonProps {
  text: string
  overrideStyles?: Object
  onButtonClick: (event: any) => {}
}

const defaultStyles = {
  padding: '1rem',
}

const Button = ({ text, overrideStyles = {}, onButtonClick }: ButtonProps) => {
  const style = {
    ...defaultStyles,
    ...overrideStyles,
  }
  return (
    <button type="button" onClick={onButtonClick} style={style}>{text}</button>
  )
}

export default Button
