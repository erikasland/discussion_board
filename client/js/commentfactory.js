myModule.factory('commentFactory', function($http){
    var factory = {};

    factory.create = function(message_id){
        $http.post('/comments', message_id).success(function(output){
            console.log(output);
        })
    }

    return factory;
})