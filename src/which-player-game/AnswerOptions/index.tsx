import React from 'react'
import Button from '../../core-components/button'
import { AlternativeOption } from '../types'

type AnswerOptionsProps = {
  alternativies: AlternativeOption[],
  onAnswerClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AnswerOptions = ({alternativies, onAnswerClick}: AnswerOptionsProps): JSX.Element => {
  return (
    <div>
      {alternativies.map(alternative => {
        return (
          <Button
            key={alternative.key}
            value={alternative.key.toString()}
            text={alternative.value.toString()}
            onButtonClick={onAnswerClick}
          />
        )
      })}
    </div>
  )
}

export default AnswerOptions