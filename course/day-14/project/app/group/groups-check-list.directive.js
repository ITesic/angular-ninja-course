angular
  .module('ninja.group')
  .directive('groupsCheckList', function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/group/templates/groups-check-list.directive.html',
      scope: {
        items: '=',
        selected: '=?',
        initiallySelected: '=?',
        onChange: '&'
      },
      link: function(scope, elem, attr, ctrl) {
        /* Postavlja inicijelno stanje checkboxova i  */
        if (scope.initiallySelected) {
          scope.selected = angular.copy(scope.initiallySelected);
        }
      },
      controller: function($scope) {

        if (!$scope.selected) {
          $scope.selected = [];
        }

        $scope.find = function(item) {
          var i;
          for (i = 0; i < $scope.selected.length; i++){
            if ($scope.selected[i].name == item.name) {
              return i;
            }
          }
          return -1;
        }

        $scope.isSelected = function(item) {
          return ($scope.find(item) !== -1) ? true : false;
        }

        $scope.toggleItem = function(item) {
          var i = $scope.find(item);
          if (i !== -1) {
            $scope.selected.splice(i, 1);
          } else {
            $scope.selected.push(item);
          }
        };


        $scope.handleClick = function(item) {
          $scope.toggleItem(item);
          $scope.onChange({selected: $scope.selected})
        };


      }
    }
  });
