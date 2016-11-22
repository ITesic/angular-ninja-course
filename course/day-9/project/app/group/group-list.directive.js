angular
  .module('group')
  .directive('groupList', function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'app/group/templates/group-list.directive.html',
      // template: '<div>{{contact}} <hr> <button ng-click="toggleFavorite()">Favorite</button></div>',
      scope: {
        groups: '=',
        toggleFavorite: '&'
      },
      controller: function($scope){

        console.log($scope.toggleFavorite());

        $scope.bratRodjeni = true;
      }
    }
  })
