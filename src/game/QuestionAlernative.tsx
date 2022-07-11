import React from 'react'

const QuestionAlternative = ({answerId, answerText}: {answerId: number, answerText: string}): JSX.Element => {
  return (<button type="button" className="question-alternative" value={answerId.toString()}>{answerText}</button>)
}

export default QuestionAlternative
