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
