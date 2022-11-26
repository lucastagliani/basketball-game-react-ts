import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'

import AnswerOptions from './AnswerOptions'
import EndGameModal from './EndGameModal'
import PlayerImage from './PlayerImage'
import RiseLoader from 'react-spinners/RiseLoader'
import Score from '../../core-components/Score'
import Timer from '../../core-components/Timer'
import useGame from './useGame'

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

const spinnerStyles: CSSProperties = {
  margin: 'auto',
  height: 500,
  position: 'relative',
  top: 150,
}

const PlayerNameGame = (): JSX.Element => {
  const {
    gameData: { totalAttempts, correctAttempts, time },
    questionData: { alternativies, correctAnswer },
    isModalOpen,
    answerQuestion,
    getNewQuestion,
    resetGame,
  } = useGame()

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const userAnswer = getUserAnswerFromEvent(event)
    answerQuestion(userAnswer)

    getNewQuestion()
  }

  const onButtonClick = () => {
    resetGame()
  }

  const modalProps = {
    isModalOpen,
    correctAttempts,
    totalAttempts,
    time,
    onButtonClick,
  }

  return (
    <PlayerNameGameContainer id="player-name-game">
      <GameTitle>What is the name of the player below?</GameTitle>
      <Score
        attempts={totalAttempts}
        correct={correctAttempts}
        textBeforeScore={'Your current score is:'}
      />
      <div>
        <Timer time={time} />
      </div>
      {alternativies?.length > 0 ? (
        <>
          <PlayerImage altText="player" playerId={correctAnswer} />
          <AnswerOptions alternativies={alternativies} onAnswerClick={handleOnClick} />
        </>
      ) : (
        <RiseLoader size={30} color={'#999'} cssOverride={spinnerStyles} />
      )}
      <EndGameModal {...modalProps} />
    </PlayerNameGameContainer>
  )
}

export default PlayerNameGame
