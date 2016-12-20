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
          console.log(user);
            return userService.getCurrentUser()
              .then(function(user){
                $cookies.putObject('ninjaUser', user);
                $state.go('contacts');
              });
        })
        .catch(function(e){
          $scope.error = e.data;
        });
    }
  })
