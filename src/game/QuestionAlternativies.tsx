import React from 'react'
import QuestionAlternative from './QuestionAlernative'

type Alternative = {
  key: number
  value: string
}

const QuestionAlternativies = ({alternativies}: { alternativies: Alternative[] }): JSX.Element => {
  return (
    <div className="question-alternativies">
      {
        // eslint-disable-next-line max-len
        alternativies.map((item: Alternative) => <QuestionAlternative key={item.key} answerId={item.key} answerText={item.value} />)
      }

    </div>
  )
}
export default QuestionAlternativies
