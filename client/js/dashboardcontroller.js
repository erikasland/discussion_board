myModule.controller('dashboardController', function(userFactory, topicFactory, topicFactory,$location){
    var _this = this;
    this.logged_in_user = userFactory.curr_user.user;
    
    this.topics = topicFactory.index(function(topics){
        _this.topics = topics
    })

    console.log(this.logged_in_user)

    this.countTopicPosts = function(topic){
        return topic.length;
    }

    this.addTopic = function(user){
        _this.topic.user = user;
        topicFactory.create(_this.topic);
        userFactory.update('topic', userFactory.curr_user)
        _this.topics = topicFactory.index(function(topics){
            _this.topics = topics;
        })
    }

    this.goToTopic = function(topic_number, topic_id){
        topicFactory.curr_topic = {topic_number: topic_number, topic_id: topic_id};
        $location.path('/topic/' + topic_number);
    }

    this.redirToProfile = function(user_id, user_index){
        console.log(user_id)
        userFactory.profile_user = user_id;
        $location.path('/user/' + user_index)
    }
})