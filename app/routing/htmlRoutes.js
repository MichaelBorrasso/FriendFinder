<<<<<<< HEAD
var path = require("path");

module.exports = function (app) {

    //Survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //Home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
=======
var path = require("path");

module.exports = function (app) {

    //Survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"));
    });

    //Home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });
>>>>>>> 8ad570eb9cd3d063af7461cac50ca23a314e1968
}