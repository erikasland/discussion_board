var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Topic = mongoose.model('Topic');
module.exports = {
    index: function(req, res){
        Topic.find({_id: req.params.id}).deepPopulate('messages.comments').exec(function(err, messages){
            if(err){
                console.log(err);
            }else{
                res.json(messages)
            }
        })
    },
    create: function(req, res){
        Topic.findOne({_id: req.body.topic}, function(err, topic){
            if(err){
                console.log(err)
            }else{
                var message = new Message({content: req.body.answer, user: req.body.user})
                message._topic = topic._id;
                topic.messages.push(message);
                message.save(function(err){
                    if(err){
                        console.log(err)
                    }else{
                        topic.save(function(err){
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
    },
    update: function(req, res){
        Message.find({_id: req.body.message_id}, function(err, message){
            if(err){
                console.log(err);
            }else{
                function hasUserVoted(voteNum){  //Check to see if user has voted
                    var vote_users;
                    if(voteNum == 0){
                        vote_users = message[0].upvotes.user
                    }else{
                        vote_users = message[0].downvotes.user
                    }
                    for(var index=0; index < vote_users.length; index++){
                        if(vote_users[index] == req.body.user_id){
                            return true;
                        }
                    }
                }

                //If topic create or message creator is not voting, like or dislike message only once.
                if(message[0].user.user._id === req.body.user_id || req.body.topic_user_id === req.body.user_id || hasUserVoted(req.body.vote_type)){
                    res.end();
                }else{  //Did a user like or dislike the message (0 or 1). Sets the update syntax
                    var update_vote_object;
                    if(req.body.vote_type == 0){
                        update_vote_object = {$set: {upvotes: {user: req.body.user_id, vote: message[0].upvotes.vote + 1}}}
                    }else{
                        update_vote_object = {$set: {downvotes: {user: req.body.user_id, vote: message[0].downvotes.vote + 1}}}
                    }
                    
                    Message.update({_id: req.body.message_id}, update_vote_object, function(err, message){
                        if(err){
                            console.log(err);
                        }else{
                            res.end();
                        }
                    })
                }
            }
        })
    }
}