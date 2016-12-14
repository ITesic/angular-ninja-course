angular
  .module('ninja.user')
  .factory('userService', function($http, API_BASE_URL){
    return {
      login: login,
      register: register
    }

    function login(username, password){
      return $http.post(API_BASE_URL + '/users/login', {
        username: username,
        password: password
      })
        .then(function(r){
          return r.data;
        });
    }

    function register(userData){

    }

    function getAllUsers() {

    }

    function getUser(userId) {

    }

    function createUser(userData) {

    }

    function updateUser(userId, userData) {

    }

    function deleteUser(userId) {

    }
  });
