import React from 'react'
import './App.css'
import Header from './header'
import WhichPlayerGame from './which-player-game/WhichPlayerGame'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <WhichPlayerGame />
    </div>
  )
}

export default App
