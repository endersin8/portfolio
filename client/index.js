import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import App from './app'
import history from './history'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <App/>
      </CssBaseline>
    </ThemeProvider>
  </Router>,
  document.getElementById("app")
)
