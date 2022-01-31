import React from 'react'
import QuestionAlternative from './QuestionAlernative'

type Alternative = {
  key: number
  value: string
}

const QuestionAlternativies = (props: any) => {
  const { alternativies } = props
  return (
    <div>
      {
        // eslint-disable-next-line max-len
        alternativies.map((item: Alternative) => <QuestionAlternative answerId={item.key} answerText={item.value} />)
      }

    </div>
  )
}
export default QuestionAlternativies
