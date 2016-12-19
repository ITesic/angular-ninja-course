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
        controller: 'UserProfileCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/user/templates/users.html',
        controller: 'UsersCtrl'
      })
      .state('user', {
        url: '/user/:id',
        templateUrl: 'app/user/templates/user.html',
        controller: 'UserCtrl',
        params: {
          id: null,
          user: null
        }
      })
      .state('new-user', {
        url: '/new-user',
        templateUrl: 'app/user/templates/new-user.html',
        controller: 'NewUserCtrl'
      })
      .state('edit-user', {
        url: '/edit-user/:id',
        templateUrl: 'app/user/templates/edit-user.html',
        controller: 'EditUserCtrl',
        params: {
          id: null,
          user: null
        }
      })
  });
