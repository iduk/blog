import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './assets/scss/main.scss'
import App from './App'
import ThemeProvider from './components/Theme/ThemeProvider'

ReactDOM.render(
  <BrowserRouter history={history} basename={process.env.ASSET_PATH}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
