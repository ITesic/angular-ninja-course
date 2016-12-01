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

    $scope.toggleGroup = function(group) {
      var i, position = -1;
      for (i = 0; i < $scope.newContact.groups.length; i++){
        if ($scope.newContact.groups[i].name == group.name) {
          position = i;
        }
      }

      if (position > -1) {
        $scope.newContact.groups.splice(position, 1);
      } else {
        $scope.newContact.groups.push(group);
      }
    }

    

    $scope.saveContact = function (contact) {
      contactService.createContact(contact);
      $state.go('contacts');
    }

  });
