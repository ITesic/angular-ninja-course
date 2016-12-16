angular
  .module('ninja.user')
  .controller('LoginCtrl', function($scope, $state, userService){

    $scope.userCredentials = {
      username: '',
      password: ''
    };

    $scope.login = function(){
      userService.login($scope.userCredentials)
        .then(function(){
          $state.go('/contacts');
        });
    };

  });
