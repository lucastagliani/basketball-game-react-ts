import React from 'react'
import styled from '@emotion/styled'
import SocialMedia from './SocialMedia'

const AppFooter = styled.footer`
  width: 100%;
  background-color: #afb4ba;
  padding: 1rem
`

const CopyRightText = styled.span`
  font-size: 11px
`

const Footer = (): JSX.Element => {
  const socialMediaItems = [
    {
      faCode: 'linkedin',
      url: 'https://www.linkedin.com/in/lucastagliani/'
    },
    {
      faCode: 'medium',
      url: 'https://medium.com/@lucastagliani'
    },
    {
      faCode: 'github',
      url: 'https://github.com/lucastagliani'
    },
    {
      faCode: 'instagram',
      url: 'http://instagram.com/lucas_tagliani'
    },
    {
      faCode: 'twitter',
      url: 'https://twitter.com/lucastagliani'
    },
  ]
  return (
    <AppFooter>
      <CopyRightText>Copyright @ Lucas Tagliani Aguiar</CopyRightText>
      <SocialMedia items={socialMediaItems}/> 
    </AppFooter>
  )
}

export default Footer