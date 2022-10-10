/** @jsxImportSource @emotion/react */
import React from 'react'
import BrandIconWithLink from '../core-components/brand-icon-with-link'

type SocialMediaItem = {
  faCode: string
  url: string
}

type SocialMediaProps = {
  items: SocialMediaItem[]
}

const socialMediaContainerStyle = {
  margin: '0.5rem'
}

const SocialMedia = ({ items }: SocialMediaProps): JSX.Element => {
  return (
    <div css={socialMediaContainerStyle}>
      {items.map((item) => {
        const props = {
          ariaLabelText: item.faCode,
          ...item
        }
        return <BrandIconWithLink key={item.faCode} {...props} />
      })}
    </div>
  )
}

export default SocialMedia