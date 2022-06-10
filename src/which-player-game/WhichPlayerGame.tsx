import React, { useState } from 'react'
import Button from '../core-components/button/Button'
import PlayerImage from './PlayerImage'

const WhichPlayerGame = () => {
  const [alternativies, setAlternativies] = useState([{ key: '201935', value: 'James Harden' }, { key: '1626164', value: 'Devin Booker' }, { key: '202710', value: 'Jimmy Butler' }, { key: '203076', value: 'Antonhy Davis' }])
  const [rightAnswer, setRightAnswer] = useState("201935")
  const [userAnswer, setUserAnswer] = useState()

  const handleOnClick = (event: any) => {
    setUserAnswer(event.target.value)

    // get new player, setAlternativies, setRightAnswer
  }

  return (
    <div>
      <h1>Which basketball player is this?</h1>
      <PlayerImage altText="player" playerId={rightAnswer} />
      <div>
        {alternativies.map((a) => {
          let stylesToOverride
          if (!!userAnswer && a.key === userAnswer) {
            stylesToOverride = {
              backgroundColor: rightAnswer === userAnswer ? 'green' : 'red',
              color: 'white'
            }
            // if (rightAnswer === userAnswer ) {
            //   stylesToOverride = {
            //     backgroundColor: 'green',
            //     color: 'white'
            //   }
            // } else {
            //   stylesToOverride = {
            //     backgroundColor: 'red',
            //     color: 'white'
            //   }
            // }
          }

          return (
            <Button key={a.key} value={a.key} text={a.value} onButtonClick={handleOnClick} overrideStyles={stylesToOverride}/>
          )
        })}
      </div>
    </div>
  )
}

export default WhichPlayerGame
