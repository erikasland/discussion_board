myModule.controller('landingController', function($location, userFactory){
    var _this = this;

    this.loginUser = function(){
        userFactory.create(_this.username);
        $location.path('/dashboard')
    }
})