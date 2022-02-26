import React from 'react'
import './App.css'
import Game from './game'
import Header from './header'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  )
}

export default App
