/**
 * Created by nid on 8/30/15.
 */
var  MongoClient = require("mongodb").MongoClient,
          assert = require("assert"),
             url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});