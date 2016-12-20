angular.module('ninja', [
    'ngCookies',
    'ui.router',
    'ninja.user',
    'ninja.contact',
    'unrelated.events',
    'unrelated.promises'
  ])
  .config(function($httpProvider) {
    // Postavljamo flag withCredentials na true da bi omogucili da angular snimi i koristi
    // Session Cookie koji nam api vraca prilikom logina
    $httpProvider.defaults.withCredentials = true;
  })
  .run(function($rootScope, $cookies, $state, $location, $http, userService, AUTHOR, VERSION, YEAR) {

    // Flag koji nam sluzi da bi na UIju prikazali ili sakrili neke elemente
    $rootScope.userLoggedIn = false;

    // Metoda logout brise sesiju na apiju, a nakon toga brise nak cookie
    // i postavlja sve flagove na defaultne postavke
    $rootScope.logout = function() {
      userService.logout()
        .then(function(){
          $cookies.remove('ninjaUser');
          $rootScope.userLoggedIn = false;
          $rootScope.user = {};
          $state.go('login');
        });
    }

    /* Postavljamo listener na stateChangeStart event,
     * ovaj kod se izvrsava svaki put kad se promjeni state */
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      if (toState.name === "login" || toState.name === "register" ) {
        return; // no need to redirect
      }

      $rootScope.userLoggedIn = false;
      $rootScope.user = {};

      // Provjeravamo da li postoji cookie sa imenom 'ninjaUser'
      // Ako postoji onda je user ulogovan, ako ne postoji potrebno je da usera posaljemo na login
      var user = $cookies.getObject('ninjaUser');

      if (!user) {
        // preventDefault() sprecava propagaciju promjene stejta da bi se izvrsio ovaj nas kod
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
