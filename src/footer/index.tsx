import React from 'react'
import styled from '@emotion/styled'
import SocialMedia from './SocialMedia'
import CheckoutCodeText from './CheckoutCodeText'
import { useMediaQuery } from 'react-responsive'

type ContainerProps = {
  isMobile?: boolean
}

const AppFooter = styled.footer<ContainerProps>(
  ({isMobile}) => {
    return { 
      backgroundColor: '#afb4ba',
      padding: '1rem 0',
      display: 'flex',
      bottom: 0,
      flexDirection: isMobile ? 'column' : 'row',
      ...(isMobile && {width: '100%'})
    }
  }
)

const Text = styled.span`
  font-size: 12px;
`

const Box = styled.div<ContainerProps>(
  ({ isMobile }) => {
    return {
      width: isMobile ? '100%' : '33.33%',
      margin: 'auto',
      ...(isMobile && {
        padding: '0.25rem'
      })
    }
  }
)



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

const Footer = (): JSX.Element => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

  // TODO: avoid isMobile prop being passed so much
  return (
    <AppFooter isMobile={isMobile}>
      <Box isMobile={isMobile}>
        <CheckoutCodeText />
      </Box>
      <Box isMobile={isMobile}>
        <Text>Copyright @ Lucas Tagliani Aguiar</Text>
      </Box>
      <Box isMobile={isMobile}>
        <SocialMedia items={socialMediaItems} />
      </Box>
    </AppFooter>
  )
}

export default Footer