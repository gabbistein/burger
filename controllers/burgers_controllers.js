var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

// ROUTES:
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req,res) {
    burger.select(function (data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    })
})

router.post("/burgers/create", function (req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function (result) {
        console.log(result);
        res.redirect("/burgers");
    })
});

router.put("/api/burgers/:id", function (req, res) {
    var con = `id = ${req.params.id}`;
    burger.update({ "devoured": req.body.devoured }, con, function (data) {
        res.redirect("/burgers");
    })
});

module.exports = router;
