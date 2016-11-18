angular
  .module('contact')
  .controller('NewContactCtrl', function($scope, phonebookService, $state) {

    $scope.newContact = {};

    $scope.saveContact = function (contact) {
      phonebookService.addContact(contact);
      $state.go('lista');
    }
  });
