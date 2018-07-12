const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
<<<<<<< HEAD
const cloudinary = require("cloudinary");
=======
const cors = require("cors");
>>>>>>> chase-branch

//Wendy added Morgan to track database input
const logger = require("morgan");

const PORT = process.env.PORT || 3001;


//Wendy added Morgan to track database input
app.use(logger("dev"));

// Define middleware here
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//config for cloudinary API
cloudinary.config({
  cloud_name: 'dfjsgnnzp',
  api_key: "441855517495859",
  api_secret: "dHXbMO5tjow1JRq1aHS855kg0a4"
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://cebpritchett:0okm9ijn)OKM(IJN@ds123971.mlab.com:23971/reindeer_db";
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
