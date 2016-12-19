angular
  .module('ninja.user')
  .controller('RegisterCtrl', function($scope, $state, $q, userService){

    $scope.userCredentials = {
      username: '',
      password: '',
      repeatPassword: ''
    }

    $scope.sendUserCredentials = function() {
      //TODO provjeriti da li su password i repeatPassword isti
      userService.createUser({
        username: $scope.userCredentials.username,
        password: $scope.userCredentials.password
      })
      .then(function(user){
        $state.go('login');
      })
      .catch(function(e){
        console.error(e);
      });
    }

  })
