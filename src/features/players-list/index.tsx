import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { Player } from '../player-name-game/types'
import useApi from '../useApi'

const Row = styled.div`
  padding: 1rem;
  margin: auto;
`

const PlayerMiniImage = styled.img`
  height: 50px;
`

export const PlayersList = () => {
  const { fetchPlayers } = useApi()

  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    const getPlayers = async () => {
      setPlayers(await fetchPlayers())
    }

    getPlayers()
  }, [])

  return (
    <div>
      <h3>Players Stats</h3>
      {players.length > 0
        ? players.map(player => {
          const { fullName, score, teamName, assists, points, rebounds, imageLinks } = player

          return (
            <Row key={player.personId} className="row">
              <PlayerMiniImage src={imageLinks.small} alt={fullName}></PlayerMiniImage>
              <span>
                {`${fullName} - ${points} - ${rebounds} - ${assists} - ${score} - ${teamName}`}
              </span>
            </Row>
          )
        })
        : null}
    </div>
  )
}
