import React, { CSSProperties } from 'react'

type ScoreProps = {
  attempts: number
  correct: number
  textBeforeScore?: string
  textStyles?: CSSProperties
  scoreStyles?: CSSProperties
  containerStyles?: CSSProperties
}

const defaultContainerStyles: CSSProperties = {
  padding: '1rem',
  fontSize: '2rem',
  color: '#333',
}

const Score = ({
  attempts,
  correct,
  textBeforeScore = '',
  scoreStyles,
  textStyles,
  containerStyles,
}: ScoreProps): JSX.Element => {
  return (
    <div style={{ ...defaultContainerStyles, ...containerStyles }}>
      {textBeforeScore && <span style={textStyles}>{`${textBeforeScore} `}</span>}
      <span aria-label="score" style={scoreStyles}>{`${correct} / ${attempts}`}</span>
    </div>
  )
}

export default Score
