angular
  .module('contact')
  .controller('NewContactCtrl', function($scope, phonebookService, contactService) {

    $scope.newContact = contactService.contact;

    $scope.saveContact = function (contact) {
      phonebookService.addContact(contact);
    }
  });
