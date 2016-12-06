angular
  .module('ninja.contact')
  .controller('EditContactCtrl', function($scope, $state, $stateParams, contactService, groupService) {

    $scope.contact = {};

    if ($stateParams.contact) {
      $scope.contact = $stateParams.contact;
    } else if ($stateParams.id) {
      contactService.getContact($stateParams.id)
        .then(function(contact){
          $scope.contact = contact;
        });
    }

    groupService.getGroups()
      .then(function(groups){
        $scope.allGroups = groups;
      });

    $scope.setContactGroups = function(groups){
      $scope.contact.groups = groupService.reduceGroupsIds(groups);
      console.log($scope.contact);
    }

    $scope.saveContact = function (contact) {
      contactService.updateContact(contact.id, contact)
        .then(function(newContact){
          console.log(newContact);
          $state.go('contacts');
        });
    }
  });
