angular
  .module('contact')
  .controller('EditContactCtrl', function($scope, phonebookService, $state, $stateParams) {

    $scope.newContact = $stateParams.contact;

    $scope.saveContact = function (contact) {
      $state.go('lista');
    }
  });
