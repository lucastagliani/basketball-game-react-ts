import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'

type LinkProps = {
  url: string
  ariaLabelText: string
  stylesOverride?: CSSProperties
  children: React.ReactNode
  target?: string
}

const StyledLink = styled('a')`
  color: #333;
`

const Link = ({ 
  ariaLabelText, url, stylesOverride, children, target = '_blank'
}: LinkProps): JSX.Element => {
  return (
    <StyledLink
      target={target}
      href={url}
      aria-label={ariaLabelText}
      rel="noreferrer"
      style={stylesOverride}
    >{children}</StyledLink>
  )
}

export default Link