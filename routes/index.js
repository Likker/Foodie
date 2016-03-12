var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var Comment = mongoose.model('Comment');

router.get('/restaurants', function(req, res, next) {
  Restaurant.find(function(err, restaurants){
    if(err){ return next(err); }

    res.json(restaurants);
  });
});

router.post('/restaurants', function(req, res, next) {
  var restaurant = new Restaurant(req.body);

  restaurant.save(function(err, restaurant){
    if(err){ return next(err); }

    res.json(restaurant);
  });
});


module.exports = router;

