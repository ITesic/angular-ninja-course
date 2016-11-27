angular.module('ninja', [
  'ui.router',
  'ninja.user',
  'ninja.phonebook',
  'ninja.contact',
  'unrelated.events'
])
  .run(function($rootScope, AUTHOR, VERSION, YEAR){
    $rootScope.appAuthor = AUTHOR;
    $rootScope.appVersion = VERSION;
    $rootScope.appYear = YEAR;
  });
