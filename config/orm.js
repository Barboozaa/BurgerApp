var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    insertOne: function(burgName, callback) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgName], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    updateOne: function(burgId, callback) {
        connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [burgId], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    }
};

module.exports = orm