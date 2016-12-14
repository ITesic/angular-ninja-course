angular
  .module('ninja.group')
  .controller('GroupsCtrl', function($scope, $state, $q, groupService, contactService){

    $scope.groups = [];

    $q.all({
      groups: groupService.getGroups(),
      contacts: contactService.getContacts()
    })
      .then(function(r){
        r.groups.forEach(function(group, i){
          group.contacts = contactService.filterContactsByGroupName(r.contacts, group.name);
        });
        $scope.groups = r.groups;
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
        id: group.id,
        group: group
      })
    };

    $scope.edit = function(group) {
      $state.go('edit-group', {
        id: group.id,
        group: group
      });
    };

    $scope.delete = function(group) {
      groupService.deleteGroup(group.id)
        .then(function(){
          var i = $scope.groups.indexOf(group);
          $scope.groups.splice(i, 1);
        });
    };

  });
