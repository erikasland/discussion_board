var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {
    create: function(req, res){
        Message.findOne({_id: req.body.message_id}, function(err,  message){
            if(err){
                console.log(err);
            }else{
                var new_comment = new Comment({content: req.body.comment, user: req.body.user})
                new_comment._message = message._id;
                message.comments.push(new_comment);
                new_comment.save(function(err){
                    if(err){
                        console.log(err);
                    }else{
                        message.save(function(err){
                            if(err){
                                console.log(err);
                            }else{
                                res.end();
                            }
                        })
                    }
                })
            }
        })
    }
}