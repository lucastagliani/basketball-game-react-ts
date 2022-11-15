/** @jsxImportSource @emotion/react */
import React from 'react'
import styled, { CSSObject } from '@emotion/styled'
import useTrackUserAction from '../../features/useTrackUserAction'

type LinkProps = {
  url: string
  ariaLabelText: string
  stylesOverride?: CSSObject
  children: React.ReactNode
  target?: string
}

const StyledLink = styled('a')`
  color: #333;
`

const Link = ({
  ariaLabelText,
  url,
  stylesOverride,
  children,
  target = '_blank',
}: LinkProps): JSX.Element => {
  const { track } = useTrackUserAction()
  const onLinkClick = () => {
    track('link_click', {
      aria_label: ariaLabelText,
      url,
    })
  }
  return (
    <StyledLink
      target={target}
      href={url}
      aria-label={ariaLabelText}
      rel="noreferrer"
      css={stylesOverride}
      onClick={onLinkClick}>
      {children}
    </StyledLink>
  )
}

export default Link
