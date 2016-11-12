var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var burger = require("../models/burger.js");
var path = require("path");

router.route("/:burger")
	.get(function(req, res) {
		if(req.params.burger == "getBurgers") {
			burger.getBurgers(res, function(res, data) {
				res.json(data);
			});
		}
	})
	.post(parseUrlencoded, function(req, res) {
		switch(req.params.burger) {
			case "addBurger":
			burger.addBurger(req.body.tag, res, function(res, data) {
				res.json(data);
			});
			break;
			case "eatBurger":
			burger.eatBurger(req.body.id, res, function(res, data) {
				console.log(data);
				res.json(data);
			});
			break;
			default:
			console.log("WTF went wrong?");
		}
	});
module.exports = router;