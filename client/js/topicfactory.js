myModule.factory('topicFactory', function($http){
    var factory = {};
    this.curr_topic;

    factory.index = function(callback){
        $http.get('/topics').success(function(output){
            callback(output);
        })
    }

    factory.create = function(topic){
        $http.post('/topics', topic).success(function(output){
            // console.log(output);
        })
    }

    factory.show = function(topic_id, callback){
        $http.get('/topics/' + topic_id).success(function(output){
            callback(output);
        })
    }

    

    return factory
})