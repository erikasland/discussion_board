var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = mongoose.Schema({
    content: String,
    user: Schema.Types.Mixed,
    upvotes: {user: [String], vote: {type: Number, default: 0}},
    downvotes: {user: [String], vote: {type: Number, default: 0}},
    created_at: {type: Date, default: Date.now},
    _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})
mongoose.model('Message', MessageSchema);