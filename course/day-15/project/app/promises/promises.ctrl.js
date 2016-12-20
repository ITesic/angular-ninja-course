angular
  .module('unrelated.promises')
  .controller('PromisesCtrl', function($scope, $interval, $timeout, $q, promisesService){

    $scope.name = 'Neki kinez';
    $scope.time = 0.0;

    $scope.startTimer = function() {
      $scope.timer = $interval(function(){
        $scope.time += 0.1;
        if ($scope.time >= 5) {
          $scope.stopTimer();
        }
      }, 100);
    };

    $scope.stopTimer = function() {
      $interval.cancel($scope.timer)
    };

    $scope.resetTimer = function() {
      $scope.stopTimer();
      $scope.timer = 0.0;
    };

    $scope.showRealName = function() {
      $scope.startTimer();

      $timeout(function () {
        $scope.name = 'Bruce Lee'
      }, 3000);

      $scope.name = 'Jackie Chan';
    };

    $scope.bestChinese = '';
    $scope.secondBestChinese = '';

    promisesService.getBestChinese()
      .then(function(response){
        $scope.bestChinese = response;
      })
      .catch(function(error){
        console.error(error);
      });

    $q.all([
      promisesService.getBestChinese(),
      promisesService.getSecondBestChinese()
    ])
      .then(function(response){
        $scope.bestChinese = response[0];
        $scope.secondBestChinese = response[1];
        console.log(response);
      })
      .catch(function(e){
        console.error(e)
      })

  });
