angular
  .module('unrelated.events')
  .config(function($stateProvider){
    $stateProvider
      .state('learning-events', {
        url: '/learning-events',
        templateUrl: 'app/events/templates/events.html'
      })
  })
