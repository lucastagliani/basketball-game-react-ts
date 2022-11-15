import React from 'react'
import Modal, { Styles } from 'react-modal'
import Button from '../../../core-components/Button'
import Timer from '../../../core-components/Timer'
import useTrackUserAction from '../../useTrackUserAction'
import useEndGame from './useEndGame'

type EndGameModalProps = {
  isModalOpen: boolean
  totalAttempts: number
  correctAttempts: number
  time: number
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

const EndGameModal = ({
  isModalOpen,
  correctAttempts,
  totalAttempts,
  time,
  onButtonClick,
}: EndGameModalProps) => {
  Modal.setAppElement('#root')

  const { getSubtitleByScore } = useEndGame()
  const { track } = useTrackUserAction()

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
    <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Game ended modal">
      <h2>The game has ended!</h2>
      <p>
        <span>
          You scored {correctAttempts} out of {totalAttempts} in <Timer time={time} />
        </span>
      </p>
      <p>{getSubtitleByScore(correctAttempts)}</p>
      {/* <p>Share it with your friends... (TODO)</p> */}
      <Button {...buttonProps} />
    </Modal>
  )
}

export default EndGameModal
