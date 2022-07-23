import React from 'react'
import { render, screen } from '@testing-library/react'
import Score from './Score'

describe('<Score />', () => {
  it('should render 2 / 3 when 3 attempts and 2 correct', () => {
    render(<Score attempts={3} correct={2} />)
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('should render with default styles', () => {
    render(<Score attempts={3} correct={2} />)

    const scoreElement = screen.getByText('2 / 3')
    expect(scoreElement.parentElement).toHaveStyle({
      padding: '1rem',
      fontSize: '2rem',
      color: '#333',
    })
  })

  it('should render text before score when provided', () => {
    render(<Score attempts={3} correct={2} textBeforeScore="Score: " />)
    expect(screen.getByText('Score:')).toBeInTheDocument()
  })

  it('should render with custom styles', () => {
    const props = {
      attempts: 1,
      correct: 0,
      textBeforeScore: 'Your score is: ',
      containerStyles: {
        border: '1px solid gold',
      },
      textStyles: {
        color: '#000',
      },
      scoreStyles: {
        fontSize: '16px',
      },
    }

    render(<Score {...props} />)

    const textElement = screen.getByText('Your score is:')
    const scoreElement = screen.getByText('0 / 1')

    expect(textElement).toHaveStyle({ color: '#000' })
    expect(scoreElement).toHaveStyle({ 'font-size': '16px' })
    expect(scoreElement.parentElement).toHaveStyle({
      border: '1px solid gold',
    })
  })
})
