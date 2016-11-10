var dotenv = require("dotenv").config({path: "../.env"});
var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

module.exports = connection;