import React, { CSSProperties, useState } from 'react'

interface ButtonProps {
  children: React.ReactNode
  value?: string
  className?: string
  overrideStyles?: CSSProperties
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defaultStyle: CSSProperties = {
  backgroundColor: 'white',
  border: '2px solid #555',
  color: 'black',
  padding: '8px',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'Copperplate,fantasy',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px',
  transitionDuration: '0.4s',
  width: '95%',
  height: '55px',
}

const hoverStyle: CSSProperties = {
  backgroundColor: '#555',
  color: 'white',
  cursor: 'pointer',
}

const Button = ({
  children,
  value = '',
  className = '',
  overrideStyles = {},
  onButtonClick,
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
    <button
      type="button"
      value={value}
      className={className}
      onClick={onButtonClick}
      style={style}
      onMouseEnter={handleOnMouseIn}
      onMouseLeave={handleOnMouseOut}>
      {children}
    </button>
  )
}

export default Button
