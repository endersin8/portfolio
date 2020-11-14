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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const linkedIn = 'https://www.linkedin.com/in/andersonyoon8/'
  const gitHub = 'https://github.com/endersin8'

  const handleClick = (link) => {
    window.open(link)
  }

  const handleFormChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value)
    }
    if (e.target.id === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.id === 'message') {
      setMessage(e.target.value)
    }
  }

  const handleFormSubmit = (e) => {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value
    e.preventDefault()
    if (name === '') {
      setNameError(true)
    }
    if (email === '') {
      setEmailError(true)
    }
    if (message.length <= 0 ) {
      setMessageError(true)
    }
    if (name.length > 0) {
      setNameError(false)
    }
    if (email.includes('@')) {
      setEmailError(false)
    }
    if (message.length > 0) {
      setMessageError(false)
    }
    if (name.length > 0 && email.includes('@') && message.length > 0) {
      const data = {
        name: name,
        email: email,
        message: message
      }
      axios.post('/sendMessage', data)
    }

    // else {
    //   axios({
    //     method: "POST",
    //     data: {
    //       name: name,
    //       email: email,
    //       message: message
    //     }
    //   })
    // }
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
        <form className={classes.formContainer} onSubmit={handleFormSubmit} autoComplete="off" noValidate>

            <TextField required id="name" label="Your Name"
            helperText={nameError ? "THIS FIELD IS REQUIRED *" : ''}
            onChange={handleFormChange}autoComplete='off' fullWidth variant="outlined"/>

            <TextField required id="email" label="Your Email" fullWidth
            helperText={emailError ? "INVALID E-MAIL FORMAT *" : ''}
            onChange={handleFormChange}
            autoComplete='off' variant="outlined"/>


            <TextField required id="message" label="Your Message" fullWidth
            helperText={messageError ? "THIS FIELD IS REQUIRED *" : ''}
            onChange={handleFormChange}
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
