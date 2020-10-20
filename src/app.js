const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Running Server :^)')
  console.log(`Listening on port ${port}`)
})
