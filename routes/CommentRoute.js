var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

/* POST a comment to a restaurant by id */

router.post('/restaurants/:restaurant/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.restaurant = req.restaurant;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.restaurant.comments.push(comment);
    req.restaurant.save(function(err, restaurant) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

module.exports = router;