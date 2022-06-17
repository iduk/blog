import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import ThemeProvider from './components/Theme/ThemeProvider'
import './assets/scss/main.scss'

// apollo client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://iduk.co.kr/graphql',
  cache: new InMemoryCache(),
})

// 다크모드 지원 체크
// if (process.env.NODE_ENV == 'production') {
//   console.log('Prod Mode')
// } else if (process.env.NODE_ENV == 'development') {
//   console.log('Dev Mode')
// }

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
