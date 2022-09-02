import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import * as React from 'react'
import Timer from './Timer'

describe('<Timer>', () => {
  it('should start the initial clock as 00:00.000', () => {
    render(<Timer />)
    expect(screen.getByText('00:00.0')).toBeInTheDocument()
  })

  it('should NOT have the initial state after started', async () => {
    render(<Timer isRunning={true} />)
    await waitForElementToBeRemoved(() => screen.queryByText('00:00.0'))
    expect(screen.queryByText('00:00.0')).not.toBeInTheDocument()
  })
})