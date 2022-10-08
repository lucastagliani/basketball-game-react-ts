import React from 'react'
import BrandIconWithLink from '../core-components/brand-icon-with-link'

type SocialMediaItem = {
  faCode: string
  url: string
}

type SocialMediaProps = {
  items: SocialMediaItem[]
}

const SocialMedia = ({ items }: SocialMediaProps): JSX.Element => {
  return (
    <div>
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