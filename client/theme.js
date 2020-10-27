import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "rgba(46.3, 100, 1.2, 0.4)"
        }
      }
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: "rgba(46.3, 100, 1.2, 0.4)"
        }
      }
    }
  },
  palette: {
    common: {
      white: "#76ff03",
    },
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    secondary: {
      main: "#263238",
      light: "#4f5b62",
      dark: "#000a12"
    },
    background: {
      paper: "#212121",
      default: "rgba(0,0,0,1)"
    },
    action: {
      hover: "#484848"
    },
    text: {
      primary: "#76ff03",
      secondary: "#32cb00"
    },
  },
  typography: {
    fontFamily: '"Courier New", "Courier", monospace',
    button: {
      fontFamily: '"Courier New", "Courier", monospace',
      fontColor: "#76ff03",
    }
  },
})

export default theme
