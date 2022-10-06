import React from 'react'
import styled from 'styled-components'

const AppFooter = styled.footer`
  width: 100%;
  background-color: #afb4ba;
  padding: 1rem
`

const CopyRightText = styled.span`
  font-size: 11px
`

const Footer = (): JSX.Element => {
  return (
    <AppFooter>
      <CopyRightText>Copyright @ Lucas Tagliani Aguiar</CopyRightText>
    </AppFooter>
  )
}

export default Footer