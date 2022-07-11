import React, { CSSProperties, useState } from 'react'

interface ButtonProps {
  text: string
  value: string
  className?: string
  overrideStyles?: CSSProperties
  onButtonClick: (event?: any) => any
}

const defaultStyle: CSSProperties = {
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
}

const hoverStyle: CSSProperties = {
  backgroundColor: '#555',
  color: 'white',
}

const Button = ({
  text, value, className = '', overrideStyles = {}, onButtonClick,
}: ButtonProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)

  const handleOnMouseIn = () => setIsHovered(true)
  const handleOnMouseOut = () => setIsHovered(false)

  const style = {
    ...defaultStyle,
    ...overrideStyles,
    ...(isHovered && hoverStyle),
  }

  return (
    <button type="button" value={value} className={className} onClick={onButtonClick} style={style} onMouseEnter={handleOnMouseIn} onMouseLeave={handleOnMouseOut}>{text}</button>
  )
}

export default Button
