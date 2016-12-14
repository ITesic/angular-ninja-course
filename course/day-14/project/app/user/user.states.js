angular
  .module('ninja.user')
  .config(function($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/user/templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/user/templates/register.html',
        controller: 'RegisterCtrl'
      })
      .state('user-profile', {
        url: '/user-profile',
        templateUrl: 'app/user/templates/user-profile.html',
        controller: 'UserCtrl'
      })
  });
