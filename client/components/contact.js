import React, {useState} from 'react'
import {Typography, Paper, IconButton, TextField, Button, Box} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  textMod: {
    fontWeight: 'bold',
    fontSize: '23px'
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
  },
  formContainer: {
    display:"flex",
    flexDirection: 'column',
    width: '40%',
    [theme.breakpoints.down("xs")]: {
      width: '90%',
    },
    justifyContent:'center',
    alignItems: 'center',

  },
  submitBtn: {
    backgroundColor: '#18ffff',
    marginTop: '5%',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ff4081'
    }
  },
  resumeBtn: {
    backgroundColor: '#18ffff',
    color: '#000000',
    margin: '2vh',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ff4081'
    }
  }
}))

const Contact = () => {
  const theme=useTheme()
  const classes=useStyles(theme)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const linkedIn = 'https://www.linkedin.com/in/andersonyoon8/'
  const gitHub = 'https://github.com/endersin8'

  const handleClick = (link) => {
    window.open(link)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value
    let emailTest = email.includes('.com')
    let emailTestTwo = email.includes('@')
    if (name === '') {
      setNameError(true)
    }
    if (!emailTest || !emailTestTwo) {
      setEmailError(true)
    }
    if (message.length < 10 ) {
      setMessageError(true)
    }
    if (name.length > 0) {
      setNameError(false)
    }
    if (emailTest && emailTestTwo) {
      setEmailError(false)
    }
    if (message.length >= 10) {
      setMessageError(false)
    }
    if (name.length > 0 && emailTest && emailTestTwo && message.length >= 10) {
      const data = {
        name: name,
        email: email,
        message: message
      }
      axios({
        method: "POST",
        url: "https://r1grxgoppf.execute-api.us-east-1.amazonaws.com/prod",
        data: data
      }).then((res) => {
        console.log(res)
        if (res.data.msg === 'success') {
          alert(`Message sent successfully!. Thank you, ${name}!`)
          document.getElementById('contactForm').reset()
        }
        else if (res.data.msg === 'fail') {
          alert(`Something went wrong and message failed to send. Sorry about that, ${name}`)
        }
      })
    }
  }
  return(
    <Box className={classes.root}>
        <Button href="/assets/Anderson_Yoon_Resume.pdf" target="_blank" className={classes.resumeBtn}>
          Click for my Resume
        </Button>
        <Typography className={classes.textMod}>
          Contact me through...
        </Typography>
        <Paper>
          <IconButton className={classes.ghButton} onClick={()=>{handleClick(gitHub)}}>
            <GitHubIcon/>
          </IconButton>
          <IconButton className={classes.liButton} onClick={()=>{handleClick(linkedIn)}}>
            <LinkedInIcon/>
          </IconButton>
        </Paper>
        <Typography className={classes.textMod}>
          ...or send me an E-mail!
        </Typography>
        <form id='contactForm' className={classes.formContainer} onSubmit={handleFormSubmit} autoComplete="off" noValidate>

            <TextField required id="name" label="Your Name"
            helperText={nameError ? "THIS FIELD IS REQUIRED *" : ''}autoComplete='off' fullWidth variant="outlined"/>

            <TextField required id="email" label="Your Email" fullWidth
            helperText={emailError ? "INVALID E-MAIL FORMAT *" : ''}
            autoComplete='off' variant="outlined"/>


            <TextField required id="message" label="Your Message" fullWidth
            helperText={messageError ? "MINIMUM OF 10 CHARACTERS *" : ''}
            multiline
            rows={6}
            rowsMax={6}
            autoComplete='off' variant="outlined"/>

            <Button type="submit" className={classes.submitBtn} variant="contained">
              Send
            </Button>
        </form>
    </Box>
  )
}

export default Contact
