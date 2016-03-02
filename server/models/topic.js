var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = mongoose.Schema({
    title: String, 
    desc: String,
    category: String,
    user: Schema.Types.Mixed,
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    created_at: {type: Date, default: Date.now}
})
mongoose.model('Topic', TopicSchema);

var deepPopulate = require('mongoose-deep-populate')(mongoose);
TopicSchema.plugin(deepPopulate);