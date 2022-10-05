import React from 'react'
import styled from 'styled-components'
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
    </Application>
  )
}

export default App
