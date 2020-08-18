import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/base.css'
import Routes from './configs/router.config'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
