import React, { useEffect, useState } from 'react'
import Button from '../core-components/button/Button'
import PlayerImage from './PlayerImage'
import { AlternativeOption } from './types'
import useQuestionApi from './useQuestionApi'

const WhichPlayerGame = (): JSX.Element => {
  const { getNewQuestion } = useQuestionApi()
  const [alternativies, setAlternativies] = useState<AlternativeOption[]>([])
  const [rightAnswer, setRightAnswer] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNewQuestion()
      if (data) {
        setRightAnswer(data.correctAnswerKey)
        setAlternativies(data.alternativeOptions)
      }
    }

    fetchData()
  }, [])

  const updateQuestionDisplayed = async () => {
    const { data } = await getNewQuestion()
    if (data) {
      setTimeout(() => {
        setRightAnswer(data.correctAnswerKey)
        setAlternativies(data.alternativeOptions)
      }, 1000)
    }
  }

  useEffect(() => {
    updateQuestionDisplayed()
    console.log('re-render?')
  }, [userAnswer])

  const handleOnClick = (event: any) => {
    setUserAnswer(event.target.value)
    // console.log('[handleOnClick] userAnswer, rightAnswer :>> ', userAnswer, rightAnswer)
    // if (userAnswer === rightAnswer) {
    //   console.log('[handleOnClick] resposta certa!!! ')
    // } else {
    //   console.log('[handleOnClick] resposta errada =( ')
    // }
  }

  return (
    <div>
      <h1>Which basketball player is this?</h1>
      <PlayerImage altText="player" playerId={rightAnswer} />
      <div>
        {alternativies.map((alternative) => {
          return (
            <Button
              key={alternative.key}
              value={alternative.key.toString()}
              text={alternative.value.toString()}
              onButtonClick={handleOnClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WhichPlayerGame
