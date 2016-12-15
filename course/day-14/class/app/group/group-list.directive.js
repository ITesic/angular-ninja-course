angular
  .module('ninja.group')
  .directive('groupList', function(){
    return {
      restrict: 'EA',
      replace: true,
      // template: '<div>grupe</div>',
      templateUrl: 'app/group/templates/group-list.directive.html',
      scope: {
        groups: '='
      },
      controller: function($scope){

      },
      link: function(scope, elem, attrib, ctrl) {

      }
    };
  });
