var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body: String,
    author: String,
    upvotes: {type: Number, default: 0},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
});

mongoose.model('Comment', CommentSchema);