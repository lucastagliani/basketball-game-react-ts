import React from 'react'
import styled from '@emotion/styled'
import Link from '../core-components/link'


const Text = styled.span`
  font-size: 12px;
`


const CheckoutCodeText = (): JSX.Element => {
  return (
    <Text>
      Checkout the code behind:&nbsp;
      <Link 
        url='https://github.com/lucastagliani/nba-info-react-ts' 
        ariaLabelText='UI'
      >UI</Link>
      &nbsp;and&nbsp;
      <Link
        url="https://github.com/lucastagliani/nba-api-nodejs"
        ariaLabelText={'API'}
      >API</Link>
    </Text >
  )
}

export default CheckoutCodeText