angular
  .module('ninja.group')
  .controller('EditGroupCtrl', function($scope, $state, $stateParams, groupService){
    $scope.group = $stateParams.group;

    $scope.saveGroup = function(group) {
      $state.go('groups');
    }
  });
