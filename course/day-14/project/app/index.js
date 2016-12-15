angular.module('ninja', [
    'ngCookies',
    'ui.router',
    'ninja.user',
    'ninja.contact',
    'unrelated.events',
    'unrelated.promises'
  ])
  .config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  })
  .run(function($rootScope, $cookies, $state, $location, $http, userService, AUTHOR, VERSION, YEAR) {

    $rootScope.userLoggedIn = false;

    $rootScope.logout = function() {
      userService.logout()
        .then(function(){
          $cookies.remove('user');
          $rootScope.userLoggedIn = false;
          $rootScope.user = {};
          $state.go('login');
        });
    }

    /* Postavljamo listener na stateChangeStart event,
     * ovaj kod se ivrsava svaki put kad se promjeni state */
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      if (toState.name === "login" || toState.name === "register" ) {
        return; // no need to redirect
      }

      $rootScope.userLoggedIn = false;
      $rootScope.user = {};

      var user = $cookies.getObject('user');
      console.log(user);
      if (!user) {
        e.preventDefault();
        $state.go('login');
      } else {
        $rootScope.userLoggedIn = true;
        $rootScope.user = user;
      }

    });

    $rootScope.appAuthor = AUTHOR;
    $rootScope.appVersion = VERSION;
    $rootScope.appYear = YEAR;
  });
