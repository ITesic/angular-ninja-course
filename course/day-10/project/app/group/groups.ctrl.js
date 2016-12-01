angular
  .module('ninja.group')
  .controller('GroupsCtrl', function($scope, $state, groupService, contactService){

    $scope.groups = groupService.groups;

    $scope.open = function(group) {
      $state.go('group', {
        group: group
      })
    };

    $scope.edit = function(group) {
      $state.go('edit-group', {
        group: group
      });
    };

    $scope.delete = function(group) {
      groupService.deleteGroup(group);
    };

    $scope.contactsCount = function(group) {
      return contactService.getContactsByGroupName(group.name).length
    };
  });
