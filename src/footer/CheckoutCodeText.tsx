import React from 'react'
import styled from '@emotion/styled'

const Text = styled.span`
  font-size: 11px;
`

const CheckoutCodeText = (): JSX.Element => {
  return (
    <Text>
      Checkout the code behind:&nbsp;
      <a 
        href="https://github.com/lucastagliani/nba-info-react-ts" 
        target="_blank" 
        rel="noreferrer"
      >UI</a>
      &nbsp;and&nbsp;
      <a 
        href="https://github.com/lucastagliani/nba-api-nodejs" 
        target="_blank" 
        rel="noreferrer"
      >API</a>
    </Text>
  )
}

export default CheckoutCodeText