// imports
const express = require("express")
const passport = require("passport")
// import the strategy property
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("./config/keys")
const app = express()

// passport.use(), tells passport to use the strategy we pass in
// creates a new instance of the google passport strategy
// clientId and clientSecret provided by google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken)
    }
  )
)

app.get(
  // when user visits this route they get navigated to oauth flow, managed by passport using google strategy
  "/auth/google",
  // string refers to GoogleStrategy
  passport.authenticate("google", {
    // scope (permissions) specifies what access we get from google servers: profile info and email info
    scope: ["profile", "email"],
  })
)

// instruct express to tell node that it wants to listen to incoming traffic n port 5000
// heroku environment variable
const PORT = process.env.PORT || 5000
app.listen(PORT)
// test route handler
// app.get("/", (req, res) => {
//   res.send({ hey: "girl" })
// })

// app object - represents the underlying express server
// get - function that tells express that we want to create a route handler that is watching for incoming http request with a .get() method
// '/' - watch for incoming req that are trying to access this particular route
// req - argument to the arrow function. shorthand for request, object representing the incoming request
// res object - object represents the outgoing response
// close the request and send back an response containing the JSON data
