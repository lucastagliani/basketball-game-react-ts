/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react'
import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import { useMediaQuery } from 'react-responsive'

import fallbackImage from './player-fallback.png'

type PlayerImageProps = {
  altText: string
  playerId: number
  className?: string
  overrideStyles?: CSSObject
}

const getDefaultStyles = (isMobile: boolean): CSSObject => {
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

  const src = `${BASE_URL_PLAYER_IMAGE}${playerId}.${FILE_EXTENSION_PLAYER_IMAGE}`

  return (
    <ReactImageFallback
      alt={altText}
      src={src}
      fallbackImage={[fallbackImage]}
      className={className}
      css={style}
    />
  )
}
export default PlayerImage
