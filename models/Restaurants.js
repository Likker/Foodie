var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    name: String,
    link: String,
    upvotes: {type: Number, default: 0},
    comments :[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]

});

    RestaurantSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Restaurant', RestaurantSchema);