var orm = require("../config/orm.js");

var burger = {
	getBurgers: function(res, cb) {
		orm.selectAll(function(data){
			cb(res, data);
		});
	},
	addBurger: function(burger, res, cb) {
		orm.insertOne(burger, function(data) {
			cb(res, data);
		});
	},
	eatBurger: function(id, res, cb) {
		orm.updateOne(id, function(data) {
			cb(res, data);
		});
	}
};
module.exports = burger;