angular
  .module('ninja.user')
  .controller('EditUserCtrl', function($scope, $state, $stateParams, userService) {

    $scope.user = {};

    $scope.errors = [];

    if ($stateParams.user) {
      // Ako smo dobili citav kontakt u $stateParams onda koristimo njega
      $scope.user = $stateParams.user;
    } else if ($stateParams.id) {
      // Ako smo dobili samo id u $stateParams onda dobavljamo kontakt sa APIja
      userService.getUser($stateParams.id)
        .then(function(user){
          $scope.user = user;
        });
    }

    /* Snimamo kontakta na API i zatim odlazimo na stranicu sa listom kontakata */
    $scope.saveUser = function () {
      userService.updateUser($scope.user.id, $scope.user)
        .then(function(newUser){
          $state.go('users');
        })
        .catch(function(e){
          $scope.errors = e.data.errors;
        });
    }
  });
