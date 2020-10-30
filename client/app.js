import React, {useRef} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Projects, Navbar, About, Skills, Contact} from './components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
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
    textTransform: "initial",
    borderRadius: "1rem",
    fontWeight: 'bold'
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center"
  },
  projectCont: {
    width: "100%",
    paddingTop: 64
  },
  skillsCont: {
    width: "100%",
    paddingTop: 64
  },
  contactCont: {
    width: "100%",
    paddingTop: 64
  }
}))

const App = () => {
  const aboutRef = useRef()
  const projectRef = useRef()
  const skillRef = useRef()
  const contactRef = useRef()
  const refClickObj = {
    aboutClick() {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    },
    projectClick() {
      projectRef.current.scrollIntoView({ behavior: 'smooth' })
    },
    skillClick() {
      skillRef.current.scrollIntoView({ behavior: 'smooth' })
    },
    contactClick() {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const theme = useTheme()
  const classes = useStyles(theme)
  return(
    <div ref={aboutRef} className={classes.root}>
      <div className={classes.container}>
        <Navbar refClick={refClickObj}/>
          <div className={classes.content}>
            <About/>
            <div className={classes.projectCont} ref={projectRef}>
              <Projects/>
            </div>
            <div ref={skillRef} className={classes.skillsCont}>
              <Skills/>
            </div>
            <div ref={contactRef} className={classes.contactCont}>
              <Contact />
            </div>

          </div>
      </div>
      <div className={classes.footerContainer}>
        <Typography className={classes.footer}>
          Created by Anderson Yoon
        </Typography>
      </div>
    </div>
  )
}

export default withRouter(App)
