angular
  .module('ninja.shared')
  .directive('checkList', function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/shared/templates/check-list.directive.html',
      scope: {
        items: '=',
        selected: '='
      },
      link: function(scope, elem, attr, ctrl) {

      },
      controller: function($scope) {

        $scope.toggleItem = function(item) {
          var i = $scope.selected.indexOf(item);

          if (i > -1) {
            $scope.selected.splice(i, 1);
          } else {
            $scope.selected.push(item);
          }
        };

        $scope.isSelected = function(item) {
          var i;
          for (i = 0; i < $scope.selected.length; i++) {
            if ($scope.selected[i] == item) {
              return true;
            }
          }
          return false;
        }

        $scope.handleClick = function(item) {
          $scope.toggleItem(item);
        };
      }
    }
  });
