import styled from '@emotion/styled'
import React from 'react'
import Button from '../../../core-components/Button'
import { AlternativeOption } from '../types'

type AnswerOptionsProps = {
  alternativies: AlternativeOption[]
  onAnswerClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AnswerOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const ButtonWrapper = styled.div`
  width: 50%;
`

const AnswerOptions = ({ alternativies, onAnswerClick }: AnswerOptionsProps): JSX.Element => {
  return (
    <AnswerOptionsContainer>
      {alternativies.map(alternative => {
        return (
          <ButtonWrapper key={alternative.key}>
            <Button value={alternative.key.toString()} onButtonClick={onAnswerClick}>
              {alternative.value}
            </Button>
          </ButtonWrapper>
        )
      })}
    </AnswerOptionsContainer>
  )
}

export default AnswerOptions
