import React from 'react'
import styled from '@emotion/styled'
import Footer from './footer'
import Header from './header'
import PlayerNameGame from './player-name-game'

const Application = styled.div`
  text-align: center;
`

const App = (): JSX.Element => {
  return (
    <Application>
      <Header />
      <PlayerNameGame />
      <Footer />
    </Application>
  )
}

export default App
