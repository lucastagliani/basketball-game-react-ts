import React from 'react'
import Modal, { Styles } from 'react-modal'
import Button from '../../../core-components/Button'
import useTrackingService from '../../useTrackingService'
import useGameOverService from './useGameOverService'

type GameOverModalProps = {
  isModalOpen: boolean
  totalAttempts: number
  correctAttempts: number
  onButtonClick: (event?: React.MouseEvent<HTMLButtonElement>) => void
}

const customStyles: Styles = {
  content: {
    height: 'fit-content',
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 500,
  },
}

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root')
}

const GameOverModal = ({
  isModalOpen,
  correctAttempts,
  totalAttempts,
  onButtonClick,
}: GameOverModalProps) => {
  const { getSubtitleByScore } = useGameOverService()
  const { track } = useTrackingService()

  const handleButtonClick = () => {
    track('play_again', {
      total_right_answers: correctAttempts,
      total_answers: totalAttempts,
    })
    onButtonClick()
  }

  const buttonProps = {
    children: 'Play again!',
    onButtonClick: handleButtonClick,
  }

  return (
    <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Game over modal">
      <h2>The game is over!</h2>
      <p>
        You scored {correctAttempts} out of {totalAttempts}
      </p>
      <p>{getSubtitleByScore(correctAttempts)}</p>
      {/* <p>Share it with your friends... (TODO)</p> */}
      <Button {...buttonProps} />
    </Modal>
  )
}

export default GameOverModal
