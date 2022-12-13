import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import { playersApiMockedData } from './__mocks__/playersApiMockedData'
import { PlayersList } from '.'

jest.mock('axios', () => ({
  get: () => {
    return {
      data: playersApiMockedData,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    }
  },
}))

describe('<PlayersList />', () => {
  it('should render title', () => {
    render(<PlayersList />)
    expect(screen.getByRole('heading', { name: 'Players Stats' })).toBeInTheDocument()
  })

  it('should list all players from API', async () => {
    const { container } = render(<PlayersList />)
    await waitFor(() => {
      expect(container.querySelectorAll('.row').length).toBe(13)
    })
  })
})
