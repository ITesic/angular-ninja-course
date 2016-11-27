angular
  .module('ninja.phonebook')
  .config(function($stateProvider){
    $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'app/phonebook/templates/list.html',
        controller: 'PhonebookCtrl'
      })
  });
