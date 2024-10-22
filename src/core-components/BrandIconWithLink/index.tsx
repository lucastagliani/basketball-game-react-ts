import React from 'react'

import Link from '../Link'

type BrandIconWithLinkProps = {
  faCode: string
  ariaLabelText: string
  url: string
}

const linkStyles = {
  fontSize: '1.2rem',
  margin: '0.2rem',
}

const BrandIconWithLink = ({ faCode, ariaLabelText, url }: BrandIconWithLinkProps): JSX.Element => {
  const iconClassName = `fa-brands fa-${faCode}`
  return (
    <Link url={url} ariaLabelText={ariaLabelText} stylesOverride={linkStyles}>
      <i className={iconClassName}></i>
    </Link>
  )
}

export default BrandIconWithLink
