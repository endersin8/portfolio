import React, {useState} from 'react'
import {Typography, Paper, IconButton, TextField, Button} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextLoop from 'react-text-loop'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
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
    width: '30%',
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
    if (message.length < 20 ) {
      setMessageError(true)
    }
    if (name.length > 0) {
      setNameError(false)
    }
    if (emailTest && emailTestTwo) {
      setEmailError(false)
    }
    if (message.length >= 20) {
      setMessageError(false)
    }
    if (name.length > 0 && emailTest && emailTestTwo && message.length >= 20) {
      const data = {
        name: name,
        email: email,
        message: message
      }
      axios({
        method: "POST",
        url: "https://6pjesdr0hl.execute-api.us-east-1.amazonaws.com/dev/sendMessage",
        data: data
      }).then((res) => {
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
    <Paper className={classes.root}>
        <Typography className={classes.textMod}>
          Contact me through...
        </Typography>
        <TextLoop mask={true} fade={false}>
          <Typography className={classes.textMod}>GitHub!</Typography>
          <Typography className={classes.textMod}>LinkedIn!</Typography>
        </TextLoop>
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
            helperText={messageError ? "MINIMUM OF 20 CHARACTERS *" : ''}
            multiline
            rows={5}
            rowsMax={5}
            autoComplete='off' variant="outlined"/>

            <Button type="submit" className={classes.submitBtn} variant="contained">
              Send
            </Button>
        </form>
    </Paper>
  )
}

export default Contact
