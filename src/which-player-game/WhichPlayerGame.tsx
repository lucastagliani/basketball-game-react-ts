import React from 'react'
import Button from '../core-components/button/Button'
import PlayerImage from './PlayerImage'

const WhichPlayerGame = () => {
  const alternativies = [{ key: '201935', value: 'James Harden' }, { key: '1626164', value: 'Devin Booker' }, { key: '202710', value: 'Jimmy Butler' }, { key: '203076', value: 'Antonhy Davis' }]

  const handleOnClick = (event: any) => {
    console.log('handleOnClick, event:', event.target.value)
  }

  return (
    <div>
      <h1>Which basketball player is this?</h1>
      <PlayerImage altText="player" playerId="201935" />
      <div>
        {alternativies.map((a) => (
          <Button key={a.key} value={a.key} text={a.value} onButtonClick={handleOnClick} />
        ))}
      </div>
    </div>
  )
}

export default WhichPlayerGame
