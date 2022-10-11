import React from 'react'
import styled from '@emotion/styled'

type BrandIconWithLinkProps = {
  faCode: string
  ariaLabelText: string
  url: string
}

const Link = styled('a')`
  margin: 0.2rem;
  font-size: 1.2rem;
  color: #333;
`

const BrandIconWithLink = ({faCode, ariaLabelText, url}: BrandIconWithLinkProps): JSX.Element => {
  const iconClassName = `fa-brands fa-${faCode}`
  return (
    <Link href={url} aria-label={ariaLabelText} target="_blank" rel="noreferrer">
      <i className={iconClassName}></i>
    </Link>
  )
}

export default BrandIconWithLink