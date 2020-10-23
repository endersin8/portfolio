import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Projects, Navbar, About} from './components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${"/assets/port3.png"})`,
    },
    backgroundImage: `url(${"assets/port3.png"})`,
    backgroudRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    position:"relative",
    minHeight:"100vh"
  },
  container: {
    paddingBottom: "3.5rem"
  },
  footerContainer: {
    display:"flex",
    flexDirection: "column",
    width:"100%",
    position: "absolute",
    bottom: "0",
    paddingBottom:"2.5rem",
    height: "2.5rem",
  },
  footer: {
    ...theme.typography.button,
    alignSelf:"center",
    background: "#000000",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    textTransform: "capitalize",
    borderRadius: "1rem"
  }
}))

const App = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/projects' component={Projects}/>
          </Switch>
      </div>
      <div className={classes.footerContainer}>
        <Typography className={classes.footer}>
          Created By Anderson Yoon
        </Typography>
      </div>
    </div>
  )
}

export default withRouter(App)
