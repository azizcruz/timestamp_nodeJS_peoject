// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
var date = null;
var timestamp = null;

// Function to convert from timestamp to natural date.
function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		time;
			
  
  // Get month name.
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  mm = monthNames[d.getMonth()];
	
	// ie: 2013-02-18, 8:35 AM	
	time = mm + " " + dd + ", " + yyyy;
		
	return time;
}


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Get the new date data to client.
app.get("/date", (request, response) => {
  response.send(date)
})

// Post the date data from client.
app.post("/date", (request, response) => {
  timestamp = request.query.date;
  
  date = {
      "unix": () => {
        if(timestamp.substr(0, 3)) {
          return timestamp;
        } else {
          console.log("not valid")
        }
      },
      "natural": convertTimestamp(timestamp)
  }
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
