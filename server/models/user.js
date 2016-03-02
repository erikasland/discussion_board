var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: String,
    topics: {type: Number, default: 0},
    messages: {type: Number, default: 0},
    comments: {type: Number, default: 0},

})
mongoose.model('User', UserSchema);