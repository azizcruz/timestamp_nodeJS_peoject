// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
var date = null;
var timestamp = null;

// Function to convert from timestamp to natural date.
function convertTimestamp(timestamp) {
  
  if(timestamp === "" || timestamp === " ") {
   return null; 
  }
  
  if(timestamp.length > 12) {
       return null; 
  }
  
   if(/[0-9]/.test(timestamp.substr(0, 3))) {
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
} else {
  return timestamp;
}
  
}

// Function to check the timestamp if its unix or natural date
  var getTimestamp = (timestamp) => {  
  
  if(timestamp === "" || timestamp === " ") {
   return null; 
  }
    
  if(/[0-9]/.test(timestamp.substr(0, 7))) {
      if(timestamp.length > 12) {
       return null; 
      }
          return timestamp;
        } else {
          // Handle if the entered date is a natural date.
          var months = {
            "January": "01",
            "Februray": "02",
            "March":"03",
            "April":"04",
            "May":"05",
            "June":"06",
            "July":"07",
            "August":"08",
            "September":"09",
            "October":"10",
            "November":"11",
            "December":"12"
          }
          // Make the enetered string of date as an array.
          var dateArray = timestamp.split(" ");
          
          var mm = months[dateArray[0]]; // Get month number from natural date.
          var dd = dateArray[1].substr(0, 2); // Get the day of the month.
          var yyyy = dateArray[2]; // Get the year of the date.
          var date = mm + "-" + dd + "-" + yyyy // concatinate the date new values.
              date = new Date(date).getTime() / 1000 // return the timestamp of the date.
              
          
          return date; 
          
          
        }
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
      "unix": getTimestamp(timestamp) ,
      "natural": convertTimestamp(timestamp)
  }
  
  console.log(date)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
