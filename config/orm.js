var connection = require("./connection.js");

var orm = { // ABSTRACT FUNCTIONS WE PASS TO BURGER.JS FOR SPECIFICS
    selectAll: function() {},

    insertOne: function() {},

    updateOne: function() {}
};

module.exports = orm


// LOOK AT CATS APP IN THE HANDLEBARS FOLDER