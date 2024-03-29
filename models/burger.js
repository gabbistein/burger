var orm = require("../config/orm");

var burger = {
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        })
    },
    select: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
