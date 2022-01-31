import React from 'react'

const QuestionAlternative = (props: any) => {
  const { answerId, answerText } = props
  return (<button type="button" value={answerId.toString()}>{answerText}</button>)
}

export default QuestionAlternative
