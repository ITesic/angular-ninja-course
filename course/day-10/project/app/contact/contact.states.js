angular
  .module('ninja.contact')
  .config(function($stateProvider){
    $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'app/contact/templates/contacts-list.html',
      controller: 'ContactsListCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/templates/contact.html',
      controller: 'ContactCtrl',
      params: {
        contact: {}
      }
    })
    .state('new-contact', {
      url: '/new-contact',
      controller: 'NewContactCtrl',
      templateUrl: 'app/contact/templates/new-contact.html'
    })
    .state('edit-contact', {
      url: '/edit-contact',
      controller: 'EditContactCtrl',
      templateUrl: 'app/contact/templates/edit-contact.html',
      params: {
        contact: {}
      }
    })
  })
