angular
  .module('unrelated.promises')
  .controller('PromisesCtrl', function($scope, $timeout, $q, promisesService){

    $scope.name = 'Neki kinez';

    $scope.bestChinese = '';
    $scope.secondBestChinese = '';

    promisesService.getBestChinese().then(function(name){
      $scope.bestChinese = name;
    })


    // $scope.getName = function() {
    //
    //   var promise = $q(function(resolve, reject){
    //
    //     var rezultat = odradiNekiPosao();
    //
    //     if (rezultat) {
    //       resolve(rezultat);
    //     } else {
    //       reject(new Error('nemere'));
    //     }
    //   })
    //
    //   promise
    //     .then(function(){
    //
    //     })
    //     .catch(function(){
    //
    //     })
    //
    //   promisesService.getNameAsync()
    //     .then(function(name){
    //       $scope.name = name;
    //     })
    //     .catch(function(e){
    //       console.error(e);
    //     });
    // }
  });
