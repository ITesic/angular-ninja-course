angular
  .module('ninja')

  .controller('GrandparentCtrl', function($scope, $rootScope){
    $scope.grandparentContent = "Nema nista";
    var i = 0;

    $scope.fireGrandparentEvent = function() {
      $rootScope.$broadcast('GrandparentEvent', 'Message from grandparent');
    };

    var unsubscribe = $scope.$on('Child1Event', function(event, data){
      $scope.grandparentContent = data + ' ' + i++;
    });

    $scope.unsubscribeFromChild1 = function() {
      unsubscribe();
    }
  })

  .controller('ParentCtrl', function($scope){
    $scope.parentContent = "Nema nista";
    var i = 0;

    $scope.fireParentEvent = function() {
      $scope.$broadcast('ParentEvent', 'Message from parent');
    };

    $scope.$on('Child1Event', function(event, data){
      $scope.parentContent = data + ' ' + i++;
    });
  })

  .controller('Child1Ctrl', function($scope){
    $scope.child1Content = "Nema nista";

    $scope.fireChild1Event = function() {
      $scope.$emit('Child1Event', 'Message from child 1');
    };

    $scope.$on('ParentEvent', function(event, data){
      $scope.child1Content = data;
    })

    $scope.$on('Child2Event', function(event, data){
      $scope.child1Content = data;
    })
  })

  .controller('Child2Ctrl', function($scope){
    $scope.child2Content = "Nema nista";

    $scope.fireChild2Event = function(){
      $scope.$parent.$broadcast('Child2Event', 'Message from child 2');
    }

    $scope.$on('GrandparentEvent', function(event, data){
      $scope.child2Content = data;
    })
  })
