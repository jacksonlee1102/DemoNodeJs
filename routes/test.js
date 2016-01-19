var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var userTable = require('../entity/user');
    userTable.fetchAll().then(function(data){
        console.log(data,'xxx');
    });
    res.status(200);
    res.send('respond with a resource');
    res.end();
});

module.exports = router;