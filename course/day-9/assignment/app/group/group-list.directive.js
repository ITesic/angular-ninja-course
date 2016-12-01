angular
  .module('group')
  .directive('groupList', function(){
    return {
      restrict: 'EA',
      replace: true,
      // template: '<div>grupe</div>',
      templateUrl: 'app/group/templates/group-list.directive.html',
      scope: {
        groups: '=',
        zivotinja: '@',
        setFavorite: '&'
      },
      controller: function($scope){
        
      },
      link: function(scope, elem, attrib, ctrl) {

      }
    };
  });
