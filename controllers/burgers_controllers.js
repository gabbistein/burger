var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

// ROUTES:
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.post("/api/burgers", function (req, res) {
    burger.select(function (data) {
        var burgObj = { burgers: data };
        res.render("index", burgObj);
    })
});

router.put("/api/burgers/:id", function (req, res) {
    burger.create(["burgerName"], [req.body.burgerName], function (result) {
        res.redirect("/burgers");
    })
});

module.exports = router;
