var orm = require("../config/orm.js");

var burger = {
	getAll: function() {
		orm.selectAll(function(data){
			console.log(data);
		});
	},
	addBurger: function(burger) {
		orm.insertOne(burger, function(data) {
			console.log(data);
		});
	},
	eatBurger: function(id) {
		orm.updateOne(id, function(data) {
			console.log(data);
		});
	}
};
module.exports = burger;