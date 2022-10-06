import React from 'react'

type BrandIconWithLinkProps = {
  faCode: string
  ariaLabelText: string
  url: string
}

const BrandIconWithLink = ({faCode, ariaLabelText, url}: BrandIconWithLinkProps): JSX.Element => {
  const iconClassName = `fa-brands fa-${faCode}}`
  return (
    <a href={url} aria-label={ariaLabelText}>
      <i className={iconClassName}></i>
    </a>
  )
}

export default BrandIconWithLink