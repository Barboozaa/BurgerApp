var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgsObject = {
            burgers: data
        };
        res.render("index", burgsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.new(req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var burgId = "id = " + req.params.id;

    burger.devour(burgId, function (result) {
        res.json(result)
    });
});

module.exports = router;