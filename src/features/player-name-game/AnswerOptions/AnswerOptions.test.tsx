import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AnswerOptions from '.'

describe('<AnswerOptions />', () => {
  const onAnswerClickSpy = jest.fn()
  const props = {
    alternativies: [
      {
        key: 203999,
        value: 'Nikola Jokic',
      },
      {
        key: 1628381,
        value: 'John Collins',
      },
      {
        key: 1630532,
        value: 'Franz Wagner',
      },
      {
        key: 202695,
        value: 'Kawhi Leonard',
      },
    ],
    onAnswerClick: onAnswerClickSpy,
  }

  beforeEach(() => {
    render(<AnswerOptions {...props} />)
  })

  it('should render all answer options provided', () => {
    expect(screen.getAllByRole('button').length).toBe(4)
  })

  it('should call onAnswerClick when an answer option is clicked', () => {
    const rightAnswer = screen.getByText('Kawhi Leonard')
    userEvent.click(rightAnswer)
    expect(onAnswerClickSpy).toBeCalledTimes(1)
  })
})
