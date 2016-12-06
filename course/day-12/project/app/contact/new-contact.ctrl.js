angular
  .module('ninja.contact')
  .controller('NewContactCtrl', function($scope, contactService, $state, groupService) {

    $scope.newContact = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      skype: '',
      gender: '',
      groups: [],
      favorite: false
    };

    $scope.allGroups = groupService.getGroups();

    $scope.saveContact = function (contact) {
      contactService.createContact(contact);
      $state.go('contacts');
    }

  });
