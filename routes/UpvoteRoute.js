var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

/* POST a vote to a restaurant by id */ 

router.put('/restaurants/:restaurant/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }

    res.json(post);
  });
});