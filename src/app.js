const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

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
