angular
  .module('contact')
  .controller('NewContactCtrl', function($scope, phonebookService) {

    $scope.newContact = {
      firstName: '',
      lastName: '',
      gender: ''
    }

    $scope.saveContact = function (contact) {
      phonebookService.addContact(contact);
    }

  });
