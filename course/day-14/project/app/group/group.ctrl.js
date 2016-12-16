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
          $scope.group.contacts = [];

          contactService.getContactsByGroupName($scope.group.name)
            .then(function(contacts){
              $scope.group.contacts = contacts;
            });
        })
    }
  });
