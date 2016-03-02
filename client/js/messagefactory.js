myModule.factory('messageFactory', function($http, topicFactory){
    var factory = {};

    factory.index = function(callback){
        $http.get('/messages/' + topicFactory.curr_topic.topic_id).success(function(output){
            callback(output);
        })
    }

    factory.create = function(topic){
        $http.post('/messages', topic).success(function(output){
            // console.log(output);
        })
    }

    factory.update = function(message_id, vote_type, user_id, topic_user_id){
        $http.post('/votes', {message_id: message_id, vote_type: vote_type, user_id: user_id, topic_user_id: topic_user_id}).success(function(output){
            // console.log(output);
        })
    }

    return factory;
})