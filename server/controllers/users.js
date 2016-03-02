var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    create: function(req, res){
        var new_user = new User({name: req.body.username})
        new_user.save(function(err){
            if(err){
                console.log(err);
            }else{
                req.session.logged_in_user = new_user;
                res.json({user: req.session.logged_in_user})
            }
        })     
    },
    update: function(req, res){
        User.find({_id: req.body.user}, function(err, user){
            if(err){
                console.log(err);
            }else{
                var update_syntax;
                if(req.body.update_criteria === 'topic'){
                    update_syntax = {$set: {topics: user[0].topics + 1}}
                }else if(req.body.update_criteria === 'message'){
                    update_syntax = {$set: {messages: user[0].messages + 1}}
                }else{
                    update_syntax = {$set: {comments: user[0].comments + 1}}
                }
                User.update({_id: req.body.user}, update_syntax, function(err, updated_user){
                    if(err){
                        console.log(err);
                    }else{
                        res.end();
                    }
                })
            }
        })
    },
    show: function(req, res){
        User.find({_id: req.params.id}, function(err, user){
            if(err){
                console.log(err);
            }else{
                res.json(user[0]);
            }
        })
    }
}