const express = require("express")
const app = express()

// route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" })
})
// instruct express to tell node that it wants to listen to incoming traffic n port 5000
// heroku environment variable
const PORT = process.env.PORT || 5000
app.listen(PORT)
// app object - represents the underlying express server
// get - function that tells express that we want to create a route handler that is watching for incoming http request with a .get() method
// '/' - watch for incoming req that are trying to access this particular route
// req - argument to the arrow function. shorthand for request, object representing the incoming request
// res object - object represents the outgoing response
// close the request and send back an response containing the JSON data
