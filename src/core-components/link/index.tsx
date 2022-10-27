import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'
import useTrackingService from '../../features/useTrackingService'

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
  ariaLabelText,
  url,
  stylesOverride,
  children,
  target = '_blank',
}: LinkProps): JSX.Element => {
  const { track } = useTrackingService()
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
      style={stylesOverride}
      onClick={onLinkClick}>
      {children}
    </StyledLink>
  )
}

export default Link
