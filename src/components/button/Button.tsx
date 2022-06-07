import React, { CSSProperties } from 'react'

interface ButtonProps {
  text: string
  value: string
  className?: string
  overrideStyles?: CSSProperties
  onButtonClick: (event?: any) => any
}

const defaultStyles: any = {
  backgroundColor: 'white',
  border: '2px solid #555',
  color: 'black',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px',
  transitionDuration: '0.4s',
  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
  },
}

const Button = ({
  text, value, className = '', overrideStyles = {}, onButtonClick,
}: ButtonProps) => {
  const style = {
    ...defaultStyles,
    ...overrideStyles,
  }
  return (
    <button type="button" value={value} className={className} onClick={onButtonClick} style={style}>{text}</button>
  )
}

export default Button
