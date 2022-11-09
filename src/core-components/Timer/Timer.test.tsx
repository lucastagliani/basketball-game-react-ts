import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Timer from '.'

describe('<Timer>', () => {
  it('should render the timer as 00:00.00 when 0 is passed', () => {
    render(<Timer time={0} />)
    expect(screen.getByText('00:00.00')).toBeInTheDocument()
  })

  it('should render the timer as 00:00.10 when 100 is passed', () => {
    render(<Timer time={100} />)
    expect(screen.getByText('00:00.10')).toBeInTheDocument()
  })

  it('should render the timer as 00:02.00 when 2000 is passed', () => {
    render(<Timer time={2000} />)
    expect(screen.getByText('00:02.00')).toBeInTheDocument()
  })

  it('should render the timer as 03:00.00 when 180000 is passed', () => {
    render(<Timer time={60000 * 3} />)
    expect(screen.getByText('03:00.00')).toBeInTheDocument()
  })

  it('should render the timer as 11:57.40 when 717400 is passed', () => {
    render(<Timer time={60000 * 11 + 57 * 1000 + 400} />)
    expect(screen.getByText('11:57.40')).toBeInTheDocument()
  })
})
