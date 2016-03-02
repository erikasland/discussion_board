var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = {
    index: function(req, res){
        Topic.find({}, function(err, topics){
            if(err){
                console.log(err);
            }else{
                res.json(topics)
            }
        })
    },

    create: function(req, res){
        var new_topic = new Topic({title: req.body.title, desc: req.body.desc, category: req.body.category, user: req.body.user})
        new_topic.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.end();
            }
        })
    },

    show: function(req, res){
        Topic.find({_id: req.params.id}, function(err, topic){
            if(err){
                console.log(err);
            }else{
                res.json(topic);
            }
        })
    }
}
