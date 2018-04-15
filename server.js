// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
var chrono = require('chrono-node')
var date = null;


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Get the date data to client.
app.get("/date", (request, response) => {
  response.send(date)
})

// Post the date data from client.
app.post("/date", (request, response) => {
  date = request.query;
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
