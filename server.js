// require our packages
const logger = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

// use express Middleware ( urlEncoded, json and static ).
const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

// - create PORT and assign to a variable.
const PORT = process.env.PORT || 3000;

// - connect to Mongo Db.
mongoose.connect(process.env.MONGODB_URI || "")

// - import your routes (API and HTML Routes).
require(".routes/apiRoutes.js")(app);
require(".routes/htmlRoutes.js")(app);

// - create code to start the server and listen to requests.
