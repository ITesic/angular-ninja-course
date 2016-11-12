angular
  .module('contact')
  .controller('NewContactCtrl', function($scope, phonebookService) {
    $scope.newContact = {
        firstName: '',
        lastName: '',
        gender: '',
        birthday: '',
        city: '',
        phone: '',
        email: '',
        skype: '',
        duguje: 0
    }

    $scope.create = function() {
      phonebookService.addContact($scope.newContact);
    }
  });
