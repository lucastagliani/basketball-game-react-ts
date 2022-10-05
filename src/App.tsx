import React from 'react'
import './App.css'
import Header from './header'
import PlayerNameGame from './player-name-game'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <PlayerNameGame />
    </div>
  )
}

export default App
