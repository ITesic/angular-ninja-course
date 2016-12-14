angular
  .module('ninja.group')
  .controller('GroupCtrl', function($scope, $state, $stateParams, $q, groupService, contactService){

    $scope.group = {};

    if ($stateParams.group) {
      $scope.group = $stateParams.group;
    } else if ($stateParams.id) {
      $q.all({
        group: groupService.getGroup($stateParams.id),
        contacts: contactService.getContacts()
      })
        .then(function(r){
          $scope.group = r.group;

          $scope.group.contacts = contactService.filterContactsByGroupName(r.contacts, r.group.name);
        })
    } else {
      throw new Error("Group is not defined");
    }
  });
