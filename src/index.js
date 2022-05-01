import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './assets/scss/main.scss'
import ThemeProvider from './components/Theme/ThemeProvider'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
