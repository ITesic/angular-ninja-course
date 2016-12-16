angular
  .module('ninja.user')
  .factory('userService', function($http, API_BASE_URL){

    return {
      login: login,
      logout: logout,
      getCurrentUser: getCurrentUser
    }

    function login(userCredentials){
      return $http.post(API_BASE_URL + '/users/login', userCredentials);
    }

    function logout() {
      return $http.post(API_BASE_URL + '/users/logout');
    }

    function getCurrentUser() {
      return $http.get(API_BASE_URL + '/users/me')
        .then(function(r){
          return r.data;
        })
    }
  });
