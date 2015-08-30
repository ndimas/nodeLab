/**
 * Created by nid on 8/30/15.
 */
var express = require('express'),
    router   = express.Router(),
     passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log("retrieve user:" + username);
        // Find the user from your DB (MongoDB,)...)
        User.findOne({ username: username, password: password }, function (err, user) {
            done(err, user);
        });
    }
));

router.post('/', function(req, res, next){

    console.log("about to auth:");

    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true });
});


router.get('/', function(req, res, next){
   res.render("login");
});

module.exports = router;
