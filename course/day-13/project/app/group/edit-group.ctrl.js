angular
  .module('ninja.group')
  .controller('EditGroupCtrl', function($scope, $state, $stateParams, groupService){
    $scope.group = $stateParams.group;

    $scope.errors = [];

    $scope.saveGroup = function(group) {
      groupService.updateGroup($scope.group.id, $scope.group)
        .then(function(group){
          $state.go('groups');
        })
        .catch(function(e){
          $scope.errors = e.data.errors;
        });
    }
  });
