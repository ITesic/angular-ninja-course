angular
  .module('ninja.user')
  .controller('RegisterCtrl', function($scope, $state, $q, userService, helper){

    $scope.userCredentials = {
      username: '',
      password: '',
      repeatPassword: ''
    }

    $scope.errors = [];

    $scope.sendUserCredentials = function() {

      if ($scope.userCredentials.password !== $scope.userCredentials.repeatPassword) {
        $scope.errors.push({
          message: "Repeated password should be the same as original"
        });
        return;
      }

      userService.createUser({
        username: $scope.userCredentials.username,
        password: $scope.userCredentials.password
      })
      .then(function(user){
        $state.go('login');
      })
      .catch(function(e){
        $scope.errors = helper.parseErrors(e.data);
      });
    }

  })
