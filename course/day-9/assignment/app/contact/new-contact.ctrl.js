angular
  .module('contact')
  .controller('NewContactCtrl', function($scope, phonebookService, $state, groupService) {

    $scope.newContact = {
      groups: [
        'family'
      ]
    };

    $scope.allGroups = groupService.groups;

    $scope.saveContact = function (contact) {
      phonebookService.addContact(contact);
      $state.go('lista');
    }

    $scope.groupsChanged = function(selected) {
      $scope.newContact.groups = selected;
      console.log('Groups changed');
    }

  });
