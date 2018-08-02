var orm = require("../config/orm.js");
// TAKES ABSTRACTIONS FROM ORM AND GIVES THEM SPECIFIC VALUES

var burger = {
    // CALLS ORM FUNCS AGIVES VALUES FROM INPUT
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
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