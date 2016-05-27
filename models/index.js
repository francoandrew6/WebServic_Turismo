var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db_turism        = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db_turism[model.name] = model;
    });

Object.keys(db_turism).forEach(function(modelName) {
    if ("associate" in db_turism[modelName]) {
        db_turism[modelName].associate(db_turism);
    }
});

db_turism.sequelize = sequelize;
db_turism.Sequelize = Sequelize;

module.exports = db_turism;