angular.module('ninja', [
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
        controller: 'NewContactCtrl',
        templateUrl: 'app/contact/templates/new-contact.html'
      })
      .state('izmjena-kontakta', {
        url: '/izmjena-kontakta',
        controller: 'EditContactCtrl',
        templateUrl: 'app/contact/templates/edit-contact.html',
        params: {
          contact: {}
        }
      })
  })
  .run(function($rootScope, AUTHOR, VERSION, YEAR){
    $rootScope.appAuthor = AUTHOR;
    $rootScope.appVersion = VERSION;
    $rootScope.appYear = YEAR;
  });
