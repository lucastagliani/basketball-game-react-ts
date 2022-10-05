import React from 'react'
import background from './basketball-in-court-by-tjdragotta-from-unplash.png'

const imageStyle = {
  maxWidth: '100%',
  opacity: 0.8
}

const Header = () => (
  <header className="App-header">
    <img src={background} style={imageStyle}/>
  </header>
)

export default Header
