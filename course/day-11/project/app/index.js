angular.module('ninja', [
  'ui.router',
  'ninja.user',
  'ninja.contact',
  'unrelated.events',
  'unrelated.promises'
])
  .run(function($rootScope, AUTHOR, VERSION, YEAR){
    $rootScope.appAuthor = AUTHOR;
    $rootScope.appVersion = VERSION;
    $rootScope.appYear = YEAR;
  });
