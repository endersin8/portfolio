import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './app'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <App/>
      </CssBaseline>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("app")
)
