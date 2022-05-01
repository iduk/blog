import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'
import './assets/scss/main.scss'
import ThemeProvider from './components/Theme/ThemeProvider'

ReactDOM.render(
  <HashRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root')
)
