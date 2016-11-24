angular
  .module('shared')
  .directive('checkList', function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/shared/templates/check-list.directive.html',
      scope: {
        items: '=',
        selected: '=',
        onChange: '&'
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

        $scope.selected = function(item) {
          console.log($scope.selected.indexOf(item) > -1);
          return true;
        };

        $scope.handleClick = function(item) {
          $scope.toggleItem(item);
          $scope.onChange({
            selected: $scope.selected
          });
        };
      }
    }
  });
