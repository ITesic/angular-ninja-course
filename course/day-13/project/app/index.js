angular.module('ninja', [
  'ngCookies',
  'ui.router',
  'ninja.user',
  'ninja.contact',
  'unrelated.events',
  'unrelated.promises'
])
  .run(function($rootScope, $cookies, $state, $location, userSid, AUTHOR, VERSION, YEAR) {

    $rootScope.userLoggedIn = function() {
      return !!$cookies.get('sid');
    }

    if (!$rootScope.userLoggedIn()) {
      $location.url('/login');
    }

    /* Postavljamo listener na stateChangeStart event,
     * ovaj kod se ivrsava svaki put kad se promjeni state */
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      if(toState.name === "login") {
        return; // no need to redirect
      }

      if (!$rootScope.userLoggedIn()) {
        $location.url('/login');
      }
    });

    $rootScope.appAuthor = AUTHOR;
    $rootScope.appVersion = VERSION;
    $rootScope.appYear = YEAR;
  });
