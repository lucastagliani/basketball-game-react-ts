import React, { CSSProperties } from 'react'

type PlayerImageProps = {
  altText: string
  playerId: number
  className?: string
  overrideStyles?: CSSProperties
}

const defaultStyles = {
  height: '400px',
}

const BASE_URL_PLAYER_IMAGE = 'https://cdn.nba.com/headshots/nba/latest/1040x760/'
const FILE_EXTENSION_PLAYER_IMAGE = 'png'

const PlayerImage = ({ playerId, altText, className, overrideStyles }: PlayerImageProps) => {
  const style = {
    ...defaultStyles,
    ...overrideStyles,
  }

  return (
    <img
      alt={altText}
      src={`${BASE_URL_PLAYER_IMAGE}${playerId}.${FILE_EXTENSION_PLAYER_IMAGE}`}
      className={className}
      style={style}
    />
  )
}
export default PlayerImage
