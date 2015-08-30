/**
 * Created by nid on 8/30/15.
 */
var  express = require('express'),
    router   = express.Router();

router.get('/', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;