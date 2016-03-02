myModule.factory('userFactory', function($http){
    var factory = {};
    factory.curr_user = {};
    factory.profile_user = {};
    
    factory.create = function(username){
        $http.post('/users', {username: username}).success(function(output){
            factory.curr_user = output;
        })
    }

    factory.update = function(update_criteria, user){
        $http.post('/updateusers', {update_criteria: update_criteria, user: user.user._id}).success(function(output){
            console.log(output);
        })
    }

    factory.show = function(user, callback){
        $http.get('/users/' + user).success(function(output){
            callback(output);
        })
    }

    return factory;
})