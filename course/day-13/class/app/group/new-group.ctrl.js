angular
  .module('ninja.group')
  .controller('NewGroupCtrl', function($scope, $state, groupService){
    $scope.newGroup = {
      name: '',
      description: ''
    }

    $scope.errors = [];

    $scope.saveGroup = function() {
      groupService.createGroup($scope.newGroup)
        .then(function(r){
          console.log(r);
          $state.go('groups');
        })
        .catch(function(e){
          $scope.errors.push(e.data.errors)
          console.log(e);
        });

    }
  });
