var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
// var dotenv = require("dotenv");
// dotenv.load();

// Set port
app.set("port", process.env.PORT || 8080);

// Set static
app.use("/css",express.static(__dirname + "/public/assets/css"));
app.use("/fonts",express.static(__dirname + "/public/assets/fonts"));
app.use("/js",express.static(__dirname + "/public/assets/js"));
app.use("/images",express.static(__dirname + "/public/assets/images"));

// Import routing
var burgers = require("./controllers/burgers_controller.js");
app.use("/", burgers.routes);

// Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
	// Get all burgers from DB and pass to handlebars
	burgers.allBurgers(res, function(res, data) {
		res.render("index", {"burger": data});
	});
});


// Listener
app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});