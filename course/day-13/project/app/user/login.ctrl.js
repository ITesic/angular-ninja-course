angular
  .module('ninja.user')
  .controller('LoginCtrl', function($scope, $cookies, $state, userService){

    $scope.userCredentials = {
      username: '',
      password: ''
    }

    $scope.sendUserCredentials = function() {
      userService.login($scope.userCredentials.username, $scope.userCredentials.password)
        .then(function(user){
          if (user.id) {
            $cookies.put('sid', user.id);
            $state.go('contacts');
          }
        })
        .catch(function(e){
          console.error(e);
        });
    }
  })
