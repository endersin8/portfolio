import React, {useRef} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Projects, Navbar, Introduction, About, Skills, Contact} from './components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {Typography, useMediaQuery} from '@material-ui/core'
import Typical from 'react-typical'

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
    alignSelf: "center"
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
  },
  skillsCont: {
    width: "100%",
    paddingTop: '6.4vh'
  },
  aboutCont: {
    width: '100%',
    paddingTop: '8vh'
  },
  contactCont: {
    width: "100%",
    paddingTop: '6.4vh'
  }
}))

const App = () => {
  const aboutRef = useRef()
  const projectRef = useRef()
  const skillRef = useRef()
  const contactRef = useRef()
  const homeRef = useRef()
  const refClickObj = {
    homeClick() {
      homeRef.current.scrollIntoView({behavior:'smooth'})
    },
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
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  return(
    <div ref={homeRef} className={classes.root}>
      <div className={classes.container}>
        <Navbar refClick={refClickObj}/>
          <div className={classes.content}>
            <Introduction/>
            <div ref={aboutRef} className={classes.aboutCont}>
              <About/>
            </div>
            <div className={classes.projectCont} ref={projectRef}>
              <Typical
              className={classes.projectHeader}
              loop={1}
              steps={[
                "Projects",3000,
                "Here are my Projects!",3000
                ]}
              />
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
        {isMobile? <Typography>
          Developed by Anderson Yoon
        </Typography>: <Typography>
          Developed by Anderson Yoon | ayoon1337@gmail.com
        </Typography>}
        {isMobile? <Typography>ayoon1337@gmail.com</Typography> : undefined}
      </div>
    </div>
  )
}

export default withRouter(App)
