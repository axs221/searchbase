'use strict';

var express = require('express');
var redis = require("redis");

var client = redis.createClient();

module.exports = (function() {
    'use strict';


    var api = express.Router();
    api.get('/',function(req,res){
        var response = client.get(req.key, redis.print);
        res.json(response);
    });
    api.post('/',function(req,res){
        var response = {};
        console.log(req.body);
        //var body = JSON.parse(req.body);
        var body = req.body;
        console.log(body)
        response[req.body.key] = req.body.value;
        client.set(req.body.key, req.body.value, redis.print);
        res.json(response);
    });
    return api;
})();
