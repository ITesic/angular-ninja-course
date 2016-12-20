angular
  .module('ninja.user')
  .controller('UserCtrl', function($scope, userService, $stateParams){

    /* Pocetna vrijednost */
    $scope.user = {};

    /* Ako iz UsersCtrl posaljemo User objekat onda njega prikazemo,
     * necemo slati request na server. Ako imamo samo id kontakta, onda saljemo request. */
    if ($stateParams.user) {
      $scope.user = $stateParams.user;
    } else if ($stateParams.id) {
      userService.getUser($stateParams.id)
        .then(function(user){
          $scope.user = user;
        });
    }

    $scope.fullName = function() {
      return $scope.user.firstName + ' ' + $scope.user.lastName;
    }
  });
