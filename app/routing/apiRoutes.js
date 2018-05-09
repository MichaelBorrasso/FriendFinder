<<<<<<< HEAD
var path = require("path");
var newFriendData = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(newFriendData);
    });

    app.post('/api/friends', function (req, res) {




        newFriendData.push(req.body);

        res.json(newFriendData);

    });


app.post("/api/clear", function () {

    newFriendData = [];

})};
=======
var path = require("path");
var newFriendData = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(newFriendData);
    });

    app.post('/api/friends', function (req, res) {




        newFriendData.push(req.body);

        res.json(newFriendData);

    });


app.post("/api/clear", function () {

    newFriendData = [];

})};
>>>>>>> 8ad570eb9cd3d063af7461cac50ca23a314e1968
