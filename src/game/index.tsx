import React from 'react'
import './game.css'
import QuestionAlternativies from './QuestionAlternativies'

const Game = () => {
  const alternativies = [{ key: '201935', value: 'James Harden' }, { key: '1626164', value: 'Devin Booker' }, { key: '202710', value: 'Jimmy Butler' }, { key: '203076', value: 'Antonhy Davis' }]
  return (
    <div>
      <h1>Which basketball player is this?</h1>
      <img alt="Player" src="https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png" className="player-image" />
      <QuestionAlternativies alternativies={alternativies} />
    </div>
  )
}

export default Game
