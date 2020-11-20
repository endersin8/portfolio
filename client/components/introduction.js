import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, Box, Avatar} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Introduction} from './Content/index.js'
import Typical from 'react-typical'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
  },
  intro: {
    marginTop: 10,
    width: "100%",
    height: '30vh',
    margin: '2vh',
    overflow:'hidden',
    [theme.breakpoints.down("xs")]: {
      height: '15vh',
    }
  },
  fade: {
    position:'relative',
    width: '100%',
    top: '-20%',
    height: '30vh',
    backgroundImage: 'linear-gradient(0deg, transparent, #000 75%)',
    [theme.breakpoints.down("xs")]: {
      height: '15vh'
    },
    zIndex: 1
  },
  hello: {
    borderRadius: "1rem",
    fontSize: 40,
    margin:'2vh',
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    }
  },
  avCont: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  textCont: {
    textAlign:'center'
  },
  av: {
    margin:'2vh',
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  name: {
    color: '#18ffff',
    fontSize: 24
  },
  occupation: {
    color: '#ff4081'
  },
  text: {
    ...theme.typography.button,
    backgroundColor: "#000000",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    textTransform: "capitalize",
    borderRadius: "1rem",
    fontWeight: "bold"

  }
}))

const About = (props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles(theme)
  return(
    <Box className={classes.root}>
        <Typical
          className={classes.hello}
          loop={1}
          wrapper='b'
          steps={[
            'Hello World!', 4000,
            'Welcome to my website!', 4000
          ]}
        />
        <div className={classes.avCont}>
          <Avatar alt="Anderson Yoon" className={classes.av} src={"assets/IMG_0698.jpeg"}/>
          <div className={classes.textCont}>
            <Typography className={classes.name}>ANDERSON</Typography>
            <Typography className={classes.name}>YOON</Typography>
            <Typography className={classes.occupation}>SOFTWARE ENGINEER</Typography>
          </div>
        </div>

        <div className={classes.intro}>
          <div className={classes.fade}></div>
          <Introduction/>
        </div>
    </Box>
  )
}

export default About
