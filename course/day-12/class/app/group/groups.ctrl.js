angular
  .module('ninja.group')
  .controller('GroupsCtrl', function($scope, $state, groupService, contactService){

    $scope.groups = [];

    groupService.getGroups()
      .then(function(groups){
        $scope.groups = groups;
      })

    $scope.sortField = 'name';
    $scope.order = 'asc';

    $scope.sort = function(sortField) {
      if ($scope.sortField == sortField) {
        $scope.toggleSortOrder();
      } else {
          $scope.sortField = sortField;
      }
    }

    $scope.toggleSortOrder = function(){
      $scope.order = ($scope.order == 'asc') ? 'desc' : 'asc';
    }

    $scope.open = function(group) {
      $state.go('group', {
        group: group,
        id: group.id
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
