var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    password: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

mongoose.model('User', UserSchema);