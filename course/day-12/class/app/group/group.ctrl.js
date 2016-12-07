angular
  .module('ninja.group')
  .controller('GroupCtrl', function($scope, $state, $stateParams, groupService, contactService){

    $scope.group = {};

    groupService.getGroup($stateParams.id)
      .then(function(group){
        $scope.group = group;
      });

    $scope.contacts = contactService.getContactsByGroupName($scope.group.name);
  });
