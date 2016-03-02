var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    content: String, 
    user: Schema.Types.Mixed,
    created_at: {type: Date, default: Date.now},
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
})
mongoose.model('Comment', CommentSchema);