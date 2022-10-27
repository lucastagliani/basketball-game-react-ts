import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import mixpanel from 'mixpanel-browser'

if (process.env.REACT_APP_MIXPANEL_TOKEN) {
  mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN)
  mixpanel.track('page_load')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
