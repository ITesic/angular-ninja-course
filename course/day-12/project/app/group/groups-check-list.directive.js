angular
  .module('ninja.group')
  .directive('groupsCheckList', function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/group/templates/groups-check-list.directive.html',
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
          for (i = 0; i < $scope.selected.length; i++){
            if ($scope.selected[i].name == item.name) {
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
