angular
  .module('unrelated.events')

  .controller('GrandparentCtrl', function($scope, $timeout){
    $scope.grandparentContent = "Nema nista";

    $scope.fireGrandparentEvent = function(){
      $scope.$broadcast('GrandparentEvent', "This is data from grandparent");
    };

    $scope.$on('Child1Event', function(event, data){
      $scope.grandparentContent = data;
    });
  })

  .controller('ParentCtrl', function($scope){
    $scope.parentContent = "Nema nista";
    var i = 0;

    $scope.fireParentEvent = function(){
      $scope.$broadcast('ParentEvent', 'This is data from parent ' + i++);
    };

    // $scope.$on('Child1Event', function(event, data){
    //   $scope.parentContent = data;
    // })
  })

  .controller('Child1Ctrl', function($scope){
    $scope.ctrl1Content = "Nema nista";

    $scope.fireChild1Event = function(){
      $scope.$emit('Child1Event', 'This is data from child');
      // $scope.$parent.$broadcast('Child1Event', 'This is data from child 1');
    };

    // $scope.$emit('Child1Event', 'This is data from child 1');
    $scope.$on('ParentEvent', function(event, data){
      $scope.ctrl1Content = data;
    })

  })

  .controller('Child2Ctrl', function($scope){
    $scope.ctrl2Content = "Nema nista";

    $scope.fireChild1Event = function(){
      $scope.$emit('Child1Event', 'This is data from child 1');
      // $scope.$parent.$broadcast('Child1Event', 'This is data from child 1');
    };

    $scope.$on('GrandparentEvent', function(event, data){
      $scope.ctrl2Content = data
    });

    var parentListener = $scope.$on('ParentEvent', function(event, data){
      $scope.ctrl2Content = data;
    })

    $scope.$on('Child1Event', function(event, data){
      $scope.ctrl2Content = data
    })

    $scope.unsubscribeFromParent = function() {
      parentListener && parentListener();
    }

    // $scope.$emit('Child2Event', 'This is data from child 2');
  })
