import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import {Typography, Box, Paper, useMediaQuery} from '@material-ui/core'
import Typical from 'react-typical'

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"column"
  },
  content: {
    display: "flex",
    alignItems:"center",
    paddingTop: ".5rem"
  },
  text: {
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    textTransform: "initial",
    borderRadius: ".5rem",
    fontWeight: "bold",
    fontSize: 18
  }
}))

const Education = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return(
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Avatar alt="FSA Logo" src={"assets/edu/fsaLogo.jpg"}/>
        <Typography className={classes.text}>Fullstack Academy </Typography>
        {isMobile ? '' : <Typical className={classes.text} loop={1}
        steps={["- Coding Bootcamp (May 2020 - September 2020)", 6000, "- Graduated with a Certificate of Completion for the Software Engineering Immersive", 6000]}/>}
      </Box>
      <Box className={classes.content}>
        <Avatar alt="BxSci Logo" src={"assets/edu/bxSciLogo.jpg"}/>
        <Typography className={classes.text}>Bronx High School Of Science </Typography>
        {isMobile ? '' : <Typical className={classes.text} loop={1}
        steps={["- High School (August 2009 - August 2013)", 6000, "- Graduated with a Regents Advanced Designation High School Diploma", 6000]}/>}
      </Box>
    </Paper>
  )
}

export default Education
