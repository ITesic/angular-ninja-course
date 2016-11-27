angular
  .module('ninja.contact')
  .controller('NewContactCtrl', function($scope, phonebookService, $state, groupService) {

    $scope.newContact = {
      groups: [
        'family'
      ]
    };

    $scope.allGroups = groupService.groups;

    $scope.toggleGroup = function(group) {
      var i = $scope.newContact.groups.indexOf(group);

      if (i > -1) {
        $scope.newContact.groups.splice(i, 1);
      } else {
        $scope.newContact.groups.push(group);
      }
    }
    $scope.isPresent = function(group) {
      if ($scope.newContact.groups.indexOf(group) > -1) {
        return true;
      }
      return false;
    }

    $scope.toggleSelection = function toggleSelection(fruitName) {
      var idx = $scope.selection.indexOf(fruitName);

      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }

      // is newly selected
      else {
        $scope.selection.push(fruitName);
      }
    };

    $scope.saveContact = function (contact) {
      phonebookService.addContact(contact);
      $state.go('list');
    }

  });
