myModule.controller('profileController', function($location, userFactory, topicFactory, messageFactory){
    var _this = this;
    this.user = userFactory.show(userFactory.profile_user,function(user){
        _this.user = user;
    });

    this.logout = function(){
        window.replace('/')
    }
})