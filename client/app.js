import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Projects, Navbar, Introduction, About, Skills, Contact} from './components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {Typography, useMediaQuery} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position:"relative",
    minHeight:"100vh"
  },
  container: {
    paddingBottom: "18vh"
  },
  footerContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
      alignItems:'center'
    },
    display:"flex",
    flexDirection: "row",
    justifyContent:'center',
    width:"100%",
    position: "absolute",
    bottom: "0",
    paddingBottom: '2vh'
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    width: '100%'
  },
  projectCont: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    alignItems: 'center',
    paddingTop: '10vh'
  },
  projectHeader: {
    fontWeight: 'bold',
    [theme.breakpoints.down("xs")]: {
      fontSize: 25
    },
    marginTop: 0,

    fontSize: 40
  }
}))

const App = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <Navbar />
          <div className={classes.content}>
            <Switch>

              <Route path="/about">
                <About/>
              </Route>

              <Route path="/projects">
                <Projects/>
              </Route>

              <Route path="/skills">
                <Skills/>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>

              <Route path="/">
                <Introduction/>
              </Route>
            </Switch>
          </div>
      </div>
      <div className={classes.footerContainer}>
        {isMobile? <Typography>
          Developed by Anderson Yoon
        </Typography>: <Typography>
          Developed by Anderson Yoon &diams; ayoon1337@gmail.com
        </Typography>}
        {isMobile? <Typography>ayoon1337@gmail.com</Typography> : undefined}
      </div>
    </div>
  )
}

export default withRouter(App)
