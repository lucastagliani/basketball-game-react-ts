import React from 'react'
import styled from '@emotion/styled'
import background from './basketball-in-court-by-tjdragotta-from-unplash.png'

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  max-height: 4rem;
  overflow: hidden;
`

const HeaderImage = styled.img`
  max-width: 100%;
  opacity: 0.8;
`

const Header = () => (
  <AppHeader>
    <HeaderImage src={background} />
  </AppHeader>
)

export default Header
