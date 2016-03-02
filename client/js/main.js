var myModule = angular.module('myApp', ['ngRoute'])

myModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/landing.html',
            controller: 'landingController',
            controllerAs: 'landingControl'
        })
        .when('/dashboard', {
            templateUrl: '/partials/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'dashControl'
        })
        .when('/topic/:id', {
            templateUrl: '/partials/topic.html',
            controller: 'topicController',
            controllerAs: 'topicControl'
        })
        .when('/user/:id', {
            templateUrl: '/partials/profile.html',
            controller: 'profileController',
            controllerAs: 'profileControl'
        })
})