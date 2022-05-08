import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import ThemeProvider from './components/Theme/ThemeProvider'
import './assets/scss/main.scss'

if (process.env.NODE_ENV == 'production') {
  console.log('Prod Mode')
} else if (process.env.NODE_ENV == 'development') {
  console.log('Dev Mode')
}

ReactDOM.render(
  <BrowserRouter history={history}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
