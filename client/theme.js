import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9da6a9",
      light: "#c1d5e0",
      dark: "#62757f",
    },
    secondary: {
      main: "#cfd8dc",
      light: "#ffffff",
      dark: "#9ea7aa"
    },
    background: {
      paper:  "#ced7db",
      default: "#c1d5e0"
    }
  },
  typography: {
    fontFamily: '"Comic Sans MS", "cursive", sans-serif'
  }
})

export default theme
