import React from 'react'

import styled from '@emotion/styled'

import Footer from './features/footer'
import Header from './features/header'
import PlayerNameGame from './features/player-name-game'

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
