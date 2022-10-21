import React from 'react'
import Score from '../core-components/score/Score'
import PlayerImage from './PlayerImage'
import Timer from '../core-components/timer'
import AnswerOptions from './AnswerOptions'
import styled from '@emotion/styled'
import usePlayerNameGameService from './usePlayerNameGameService'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const getUserAnswerFromEvent = (event: React.MouseEvent<HTMLButtonElement>): number => {
  return parseInt(event.currentTarget.value)
}

const GameTitle = styled.h1`
  margin: 1rem;
`

const PlayerNameGameContainer = styled.div`
  margin: auto;
  max-width: 600px;
`

const PlayerNameGame = (): JSX.Element => {
  const {
    totalAttempts,
    correctAttempts,
    isTimerRunning,
    correctAnswer,
    alternativies,
    answerQuestion,
    getNewQuestion,
  } = usePlayerNameGameService()

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const userAnswer = getUserAnswerFromEvent(event)
    answerQuestion(userAnswer)

    getNewQuestion()
  }

  return (
    <PlayerNameGameContainer id="player-name-game">
      <GameTitle>What is the name of the player below?</GameTitle>
      <Score
        attempts={totalAttempts}
        correct={correctAttempts}
        textBeforeScore={'Your current score is:'}
      />
      <Timer isRunning={isTimerRunning} />
      {alternativies?.length > 0 ? (
        <>
          <PlayerImage altText="player" playerId={correctAnswer} />
          <AnswerOptions alternativies={alternativies} onAnswerClick={handleOnClick} />
        </>
      ) : (
        <ClimbingBoxLoader size={30} color={'#999'} cssOverride={{ margin: 'auto', height: 500 }} />
      )}
    </PlayerNameGameContainer>
  )
}

export default PlayerNameGame
