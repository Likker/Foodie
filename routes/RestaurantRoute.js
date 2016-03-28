var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

/* RETURN id for a restaurant */

router.param('restaurant', function(req, res, next, id) {
  var query = Restaurant.findById(id);

  query.exec(function (err, restaurant){
    if (err) { return next(err); }
    if (!restaurant) { return next(new Error('can\'t find post')); }

    req.restaurant = restaurant;
    return next();
  });
});

/* GET all restaurants */

router.get('/restaurants', function(req, res, next) {
  Restaurant.find(function(err, restaurants){
    if(err){ return next(err); }

    res.json(restaurants);
  });
});

/* GET a restaurant by id */

router.get('/restaurants/:restaurant', function(req, res) {
  res.json(req.restaurant);
});

/* POST a restaurant */

router.post('/restaurants', function(req, res, next) {
  var restaurant = new Restaurant(req.body);

  restaurant.save(function(err, restaurant){
    if(err){ return next(err); }

    res.json(restaurant);
  });
});



module.exports = router;