import React from 'react'
import {Paper, Typography, Box, Avatar} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles=makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  aboutHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 25
    },
    fontSize: 40
  },
  aboutSubHeader: {
    fontSize: 20,
    color: '#18ffff'
  },
  subDetails: {
    color: '#ff4081',
    width: '50%',
    [theme.breakpoints.down("xs")]: {
      width: '90%'
    },
    textAlign:'center'
  },
  av: {
    margin:'1vh',
    width: theme.spacing(18),
    height: theme.spacing(18)
  },
  journey: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column'
    },
    alignItems:'center'
  },
  journeyBox: {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    margin: '3vh'
  }
}))

const About = () => {
  const theme=useTheme()
  const classes=useStyles(theme)
  return(
    <Box className={classes.root}>
        <Typography className={classes.aboutHeader}>
          About
        </Typography>
      <Typography className={classes.aboutSubHeader}>
        - As a Software Engineer -
      </Typography>
      <Typography className={classes.subDetails}>I am a dedicated problem solver and will not rest until all errors/bugs are taken care of. I love exploring new technologies in order to create a variety of applications and strive to improve my skill as a quick learner.</Typography>
      <Typography className={classes.aboutSubHeader}>
        - Hobbies and Interests -
      </Typography>
      <Typography className={classes.subDetails}>I enjoy listening to music, watching movies, working out, playing bowling/chess/go, and hiking</Typography>
      <div className={classes.journey}>
        <div className={classes.journeyBox}>
          <Avatar className={classes.av} alt="Fullstack Academy" src={"assets/edu/fsaLogo.jpg"}/>
          <Typography>Fullstack Academy</Typography>
          <Typography>Web Development Immersive</Typography>
          <Typography>2020</Typography>
        </div>
        <div className={classes.journeyBox}>
          <Avatar className={classes.av} alt="Bronx Science High School" src={"assets/edu/bxSciLogo.jpg"}/>
          <Typography>Bronx Science</Typography>
          <Typography>High School Diploma</Typography>
          <Typography>2009 - 2013</Typography>
        </div>
      </div>
    </Box>
  )
}
export default About
