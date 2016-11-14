var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var burger = require("../models/burger.js");
var path = require("path");

// Router for adding and eating burgers
router.route("/:burger")
	// Route to add and devour burgers
	.post(parseUrlencoded, function(req, res) {
		switch(req.params.burger) {
			case "addBurger":
			burger.addBurger(req.body.tag, res, function(res, data) {
				res.json(data);
			});
			break;
			case "eatBurger":
			burger.eatBurger(req.body.id, res, function(res, data) {
				res.json(data);
			});
			break;
			default:
			console.log("WTF went wrong?");
		}
	});

// Object to export router for server and getBurgers function for handlebars
var burgers = {
	allBurgers: function(res, cb) {
		burger.getBurgers(res, function(res, data) {
			cb(res, data);
		});
	},
	routes: router
};
module.exports = burgers;