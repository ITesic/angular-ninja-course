angular
  .module('ninja.group')
  .controller('NewGroupCtrl', function($scope, $state, groupService){
    $scope.newGroup = {
      name: '',
      description: ''
    }

    $scope.saveGroup = function(group) {
      groupService.createGroup(group);
      $state.go('groups');
    }
  });
