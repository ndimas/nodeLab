/**
 * Created by ndimas on 28/8/2015.
 * twitter endpoint
 */
var express = require("express"),
    router  = express.Router(),
    tweets  = [];

router.get("/", function (req, res) {
    res.render("tsiou",{tweets:tweets});
});

router.get("/tweets", function (req, res) {
    res.send(tweets);
});

router.post("/send", function(req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({status:"ok",  message:"Tweet received"});
    } else {
        res.send({status:"nok", message:"Tweet not received"});
    }
});

module.exports = router;