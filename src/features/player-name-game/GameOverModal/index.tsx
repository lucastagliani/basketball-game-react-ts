import React from 'react'
import Modal, { Styles } from 'react-modal'
import Button from '../../../core-components/button'
import useTrackingService from '../../useTrackingService'

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

const gameOverSubtitules = [
  [
    'Where you actually trying to do it right?',
    'Uh, you are unlucky',
    'The odds said you would get at least one right, but...',
    'That is actually a hard score to get LOL',
  ],
  [
    'Yeah, maybe next time',
    'Maybe you should try an easier mode? If any...',
    'Think positively: it could be worse',
  ],
  ['Ok...', 'Has it been a long time you don`t watch NBA?'],
  ['Keep trying!', 'I bet next time you will get more!', 'You are what we call "average"'],
  ['Good stuff! You know what you are doing', 'Nicely done!', 'So close to the perfect score'],
  [
    '100%!',
    'Should you try a harder mode? If any?',
    'YOU 1 vs 0 MACHINE',
    'You were perfect!',
    'Are you the next GOAT?',
    'Do you work for NBA or something?',
    'Do you have a life besides basketball?',
  ],
]

const getNumberWithinRange = (number: number, min: number, max: number) =>
  number > max ? max : number < min ? min : number

const getRandomSubtitle = (subtitles: string[]): string =>
  subtitles[Math.floor(Math.random() * subtitles.length)]

const getSubtitleByScore = (score: number): string => {
  const arrayPosition = getNumberWithinRange(score, 0, 5)
  return getRandomSubtitle(gameOverSubtitules[arrayPosition])
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
