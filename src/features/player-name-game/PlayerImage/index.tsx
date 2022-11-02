import React, { CSSProperties } from 'react'
import { useMediaQuery } from 'react-responsive'

type PlayerImageProps = {
  altText: string
  playerId: number
  className?: string
  overrideStyles?: CSSProperties
}

const getDefaultStyles = (isMobile: boolean): CSSProperties => {
  return isMobile
    ? {
      maxWidth: '100%',
    }
    : {
      height: '400px',
    }
}

const BASE_URL_PLAYER_IMAGE = 'https://cdn.nba.com/headshots/nba/latest/1040x760/'
const FILE_EXTENSION_PLAYER_IMAGE = 'png'

const PlayerImage = ({ playerId, altText, className, overrideStyles }: PlayerImageProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

  const style = {
    ...getDefaultStyles(isMobile),
    ...overrideStyles,
  }

  if (playerId <= 0) {
    return null
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
