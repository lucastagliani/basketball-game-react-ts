import React from 'react'
import styled from '@emotion/styled'
import SocialMedia from './SocialMedia'
import CheckoutCodeText from './CheckoutCodeText'

const AppFooter = styled.footer`
  width: 100%;
  background-color: #afb4ba;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  bottom: 0;
`

const Text = styled.span`
  font-size: 11px
`

const Box = styled.div`
  width: 33.33%;
  margin: auto;
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
      <Box>
        <CheckoutCodeText />
      </Box>
      <Box>
        <Text>Copyright @ Lucas Tagliani Aguiar</Text>
      </Box>
      <Box>
        <SocialMedia items={socialMediaItems} />
      </Box>
    </AppFooter>
  )
}

export default Footer