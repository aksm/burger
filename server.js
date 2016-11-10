var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
// var dotenv = require("dotenv");
// dotenv.load();

// Set port
app.set("port", process.env.PORT || 8080);

// Set static
app.use("/css",express.static(__dirname + "/public/assets/css"));
app.use("/fonts",express.static(__dirname + "/public/assets/fonts"));
app.use("/js",express.static(__dirname + "/public/assets/js"));
app.use("/images",express.static(__dirname + "/public/assets/images"));

// Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
	res.render("index");
});

// Listener
app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});