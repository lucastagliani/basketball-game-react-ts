import React, { CSSProperties } from 'react'

interface ButtonProps {
  text: string
  value: string
  className?: string
  overrideStyles?: CSSProperties
  onButtonClick: (event: any) => {}
}

const defaultStyles: CSSProperties = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
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
