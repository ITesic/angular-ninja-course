angular
  .module('ninja.group')
  .controller('EditGroupCtrl', function($scope, $state, $stateParams, groupService){
    $scope.group = $stateParams.group;

    $scope.saveGroup = function() {
      groupService.updateGroup($scope.group.id, $scope.group)
        .then(function(){
          $state.go('groups');
        })
    }
  });
