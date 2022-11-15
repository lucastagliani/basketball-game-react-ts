/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react'
import React from 'react'

type ScoreProps = {
  attempts: number
  correct: number
  textBeforeScore?: string
  textStyles?: CSSObject
  scoreStyles?: CSSObject
  containerStyles?: CSSObject
}

const defaultContainerStyles: CSSObject = {
  padding: '1rem',
  fontSize: '1.6rem',
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
    <div css={{ ...defaultContainerStyles, ...containerStyles }}>
      {textBeforeScore && <span css={textStyles}>{`${textBeforeScore} `}</span>}
      <span aria-label="score" css={scoreStyles}>{`${correct} / ${attempts}`}</span>
    </div>
  )
}

export default Score
