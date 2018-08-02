var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        })
    },

    new: function(burgName, callback) {
        orm.insertOne(burgName, function(res) {
            callback(res);
        })
    },

    devour: function(burgId, callback) {
        orm.updateOne(burgId, function(res) {
            callback(res);
        })
    }
}

module.exports = burger