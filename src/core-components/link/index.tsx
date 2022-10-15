import React from 'react'
import styled from '@emotion/styled'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'

type LinkProps = {
  url: string
  ariaLabelText: string
  stylesOverride: Interpolation<Theme>
  children: React.ReactNode
  target?: string
}

const StyledLink = styled('a')`
  margin: 0.2rem;
  font-size: 1.2rem;
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
      css={stylesOverride}
    >{children}</StyledLink>
  )
}

export default Link