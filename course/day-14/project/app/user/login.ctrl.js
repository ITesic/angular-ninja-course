angular
  .module('ninja.user')
  .controller('LoginCtrl', function($scope, $cookies, $state, userService){

    $scope.userCredentials = {
      username: 'itesic',
      password: 'itesic'
    }

    $scope.sendUserCredentials = function() {
      userService.login($scope.userCredentials.username, $scope.userCredentials.password)
        .then(function(user){
          console.log(user);
          if (user.id) {
            userService.getCurrentUser()
              .then(function(user){
                $cookies.putObject('user', user);
                $state.go('contacts');
              });

          }
        })
        .catch(function(e){
          console.error(e);
        });
    }
  })
