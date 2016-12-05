angular
  .module('ninja.contact')
  .controller('EditContactCtrl', function($scope, $state, $stateParams, groupService) {

    $scope.contact = $stateParams.contact;

    $scope.allGroups = groupService.getGroups();

    $scope.toggleGroup = function(group) {
      var i, position;
      for (i = 0; i < $scope.contact.groups.length; i++){
        if ($scope.contact.groups[i].name == group.name) {
          position = i;
        }
      }

      if (position > -1) {
        $scope.contact.groups.splice(position, 1);
      } else {
        $scope.contact.groups.push(group);
      }
    }
    $scope.isPresent = function(group) {
      var i;
      for (i = 0; i < $scope.contact.groups.length; i++){
        if ($scope.contact.groups[i].name == group.name) {
          return true;
        }
      }
      return false;
    }

    $scope.saveContact = function (contact) {
      $state.go('contacts');
    }
  });
