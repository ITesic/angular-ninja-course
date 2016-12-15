angular
  .module('ninja.user')
  .controller('RegisterCtrl', function($scope, $state, $q, userService){
    $scope.userCredentials = {
      username: 'itesic1',
      password: 'itesic1',
      repeatPassword: 'itesic1'
    }

    $scope.sendUserCredentials = function() {
      userService.createUser({
        username: $scope.userCredentials.username,
        password: $scope.userCredentials.password
      })
      .then(function(user){
        console.log(user);
        $state.go('login');
      })
      .catch(function(e){
        console.error(e);
      });
    }

  })
