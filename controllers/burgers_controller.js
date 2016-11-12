var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var burger = require("../models/burger.js");
var path = require("path");

router.route("/addburger")
	.post(parseUrlencoded, function(req, res) {
		burger.addBurger(req.body.tag, function(data) {
			console.log(data);
		});
			res.send(200);
	});
module.exports = router;