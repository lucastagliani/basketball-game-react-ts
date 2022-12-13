import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from '@emotion/styled'

import Footer from './features/footer'
import Header from './features/header'
import PlayerNameGame from './features/player-name-game'
import { PlayersList } from './features/players-list'

const Application = styled.div`
  text-align: center;
`

const App = (): JSX.Element => {
  return (
    <Application>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerNameGame />} />
          <Route path="/players" element={<PlayersList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Application>
  )
}

export default App
