import React from 'react'
import {Typography, Paper, IconButton} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextLoop from 'react-text-loop'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3vh',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textMod: {
    fontWeight: 'bold',
    fontSize: '23px'
  },
  iconCont: {
    paddingTop: '1vh'
  },
  ghButton: {
    backgroundColor: "#000000",
    color: '#ff4081',
    '&:hover': {
      backgroundColor: 'rgba(24,255,255, 0.5)'
    }
  },
  liButton: {
    backgroundColor: "#000000",
    color: '#18ffff',
    '&:hover': {
      backgroundColor: 'rgba(100,25,51, 0.7)'
    }
  }
}))

const Contact = () => {
  const classes=useStyles()
  const linkedIn = 'https://www.linkedin.com/in/andersonyoon8/'
  const gitHub = 'https://github.com/endersin8'

  const handleClick = (link) => {
    window.open(link)
  }
  return(
    <Paper className={classes.root}>
        <Typography className={classes.textMod}>
          Contact me through...
        </Typography>
        <TextLoop mask={true} fade={false}>
          <Typography className={classes.textMod}>GitHub!</Typography>
          <Typography className={classes.textMod}>LinkedIn!</Typography>
        </TextLoop>
        <Paper className={classes.iconCont}>
          <IconButton className={classes.ghButton} onClick={()=>{handleClick(gitHub)}}>
            <GitHubIcon/>
          </IconButton>
          <IconButton className={classes.liButton} onClick={()=>{handleClick(linkedIn)}}>
            <LinkedInIcon/>
          </IconButton>
        </Paper>
    </Paper>
  )
}

export default Contact
