myModule.controller('topicController', function(userFactory, topicFactory, messageFactory, commentFactory, $location){
    var _this = this;

    this.topic = topicFactory.show(topicFactory.curr_topic.topic_id, function(topic){
        _this.topic = topic;
    });

    this.messages = messageFactory.index(function(messages){
        _this.messages = messages;
    });

    this.logout = function(){
        window.replace('/')
    }

    this.postAnswer = function(topic){
        messageFactory.create({topic: topic[0]._id, user: userFactory.curr_user, answer: _this.answer});
        messageFactory.index(function(messages){
            _this.messages = messages;
        })
        userFactory.update('message', userFactory.curr_user);
    }

    this.postComment = function(message_id, user, comment_indice){
        commentFactory.create({message_id: message_id, comment: _this.comment[comment_indice], user: userFactory.curr_user})
        messageFactory.index(function(messages){
            _this.messages = messages;
        })
        userFactory.update('comment', userFactory.curr_user);
    }

    this.vote = function(message_id, vote_type, topic_user_id){
        messageFactory.update(message_id, vote_type, userFactory.curr_user.user._id, topic_user_id);
        messageFactory.index(function(messages){
            _this.messages = messages;
        })
    }

    this.redirToProfile = function(user_id, user_index){
        userFactory.profile_user = user_id;
        $location.path('/user/' + user_index)
    }
})