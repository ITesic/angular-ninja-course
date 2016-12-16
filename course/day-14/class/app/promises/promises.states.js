angular
  .module('unrelated.promises')
  .config(function($stateProvider){
    $stateProvider
      .state('learning-promises', {
        url: '/learning-promises',
        templateUrl: 'app/promises/templates/promises.html',
        controller: 'PromisesCtrl'
      })
  })
