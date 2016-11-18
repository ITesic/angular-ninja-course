angular
    .module('ninja', [
        'ui.router',
        'phonebook',
        'contact'
    ])
    .config(function($stateProvider){
      $stateProvider
        .state('lista', {
          url: '/',
          templateUrl: 'app/phonebook/templates/list.html',
          controller: 'PhonebookCtrl'
        })
        .state('kontakt', {
          url: '/kontakt',
          templateUrl: 'app/contact/templates/contact.html',
          controller: 'ContactCtrl',
          params: {
            contact: {}
          }
        })
        .state('novi-kontakt', {
          url: '/novi-kontakt',
          templateUrl: 'app/contact/templates/new-contact.html',
          controller: 'NewContactCtrl'
        });
    })
    .run(function($rootScope, AUTHOR){
      $rootScope.author = AUTHOR;
    });
