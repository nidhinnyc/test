var express = require('express')
var app = express()
var port = process.env.PORT || 3011
var morgan = require('morgan')

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port)