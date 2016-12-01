angular
  .module('ninja.user')
  .config(function($stateProvider){
    $stateProvider
      .state('user-profile', {
        url: '/user-profile',
        templateUrl: 'app/user/templates/user-profile.html',
        controller: 'UserCtrl'
      })
  });
