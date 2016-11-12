var connection = require("./connection.js");

var query = {
	selectAll: function(cb) {
		var burgers = [];
		connection.query("SELECT * FROM burgers", function(err, rows, fields) {
			if(err) throw err;
			for(var i = 0; i < rows.length; i++) {
			var burger = {"id": rows[i].id,
				"burger_name": rows[i].burger_name,
				"devoured": rows[i].devoured};
				burgers.push(burger);
			}
			cb(burgers);
		});
	},
	insertOne: function(burger, cb) {
		connection.query("INSERT INTO burgers SET ?", {burger_name: burger},function(err, result) {
			if(err) throw err;
			// console.log(result.insertId);
			cb(result.insertId);
		});
	},
	updateOne: function(id, cb) {
		connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, id], function(err, result) {
			if(err) throw err;
			console.log("Updated "+result.changedRows+" rows");
			cb(result.changedRows);
		});
	}
};
module.exports = query;