// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
var chrono = require('chrono-node')


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/date", (request, response) => {
  var date = request.query;
  console.log(date);
  response.sendStatus(200)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
