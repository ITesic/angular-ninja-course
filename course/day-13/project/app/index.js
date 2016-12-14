angular.module('ninja', [
  'ngCookies',
  'ui.router',
  'ninja.user',
  'ninja.contact',
  'unrelated.events',
  'unrelated.promises'
])
  .run(function($rootScope, $cookies, $state, $location, userSid, AUTHOR, VERSION, YEAR) {
    $rootScope.appAuthor = AUTHOR;
    $rootScope.appVersion = VERSION;
    $rootScope.appYear = YEAR;
  });
