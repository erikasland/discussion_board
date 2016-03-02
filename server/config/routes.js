var User = require('../controllers/users.js');
var Topic = require('../controllers/topics.js');
var Message = require('../controllers/messages.js');
var Comment = require('../controllers/comments.js');
module.exports = function(app){
    app.post('/users', function(req, res){
        User.create(req, res);
    })

    app.post('/updateusers', function(req, res){
        User.update(req, res);
    })

    app.get('/users/:id', function(req, res){
        User.show(req, res);
    })

    app.get('/topics', function(req, res){
        Topic.index(req, res);
    })

    app.get('/topics/:id', function(req, res){
        Topic.show(req, res);
    })

    app.post('/topics', function(req, res){
        Topic.create(req, res);
    })

    app.post('/messages', function(req, res){
        Message.create(req, res);
    })

    app.get('/messages/:id', function(req, res){
        Message.index(req, res);
    })

    app.post('/comments', function(req, res){
        Comment.create(req, res);
    })

    app.post('/votes', function(req, res){
        Message.update(req, res);
    })
}