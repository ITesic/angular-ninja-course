angular
  .module('ninja.group')
  .controller('GroupCtrl', function($scope, $state, $stateParams, groupService, contactService){

    $scope.group = $stateParams.group;

    $scope.contacts = contactService.getContactsByGroupName($scope.group.name);
  });
