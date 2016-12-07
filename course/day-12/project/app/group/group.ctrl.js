angular
  .module('ninja.group')
  .controller('GroupCtrl', function($scope, $state, $stateParams, groupService, contactService){

    $scope.group = {};

    if ($stateParams.group) {
      $scope.group = $stateParams.group;
    } else if ($stateParams.id) {
      groupService.getGroup($stateParams.id)
        .then(function(group){
          $scope.group = group;
        })
    } else {
      throw new Error("Group is not defined");
    }

    $scope.contacts = contactService.getContactsByGroupName($scope.group.name);
  });
