const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const nodemailer = require('nodemailer')
const creds = require('./emailConfig')
const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.post('/sendMessage', function(req, res, next){
  const {name, email, message} = req.body
  if (name===undefined || email === undefined || message === undefined) {
    next(new Error('Something went wrong!'))
  }
  else {
    const mail = {
      from: name,
      to: 'ayoon1337@gmail.com',
      subject: 'New Message from Portfolio Website',
      text: `Name: ${name}\nE-mail: ${email}\nMessage: ${message}`
      }
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({msg: 'fail'})
        }
        else {
          res.json({
            msg: 'success'
          })
        }
      })
  }
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message || 'Something went wrong.')
})

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Running Server :^)')
  console.log(`Listening on port ${port}`)
})
