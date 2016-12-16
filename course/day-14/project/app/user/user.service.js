angular
  .module('ninja.user')
  .factory('userService', function($http, $cookies, $timeout, API_BASE_URL) {
    return {
      login: login,
      logout: logout,
      getCurrentUser: getCurrentUser,
      createUser: createUser
    }

    function login(username, password) {
      return $http.post(API_BASE_URL + '/users/login', {
          username: username,
          password: password
        })
        .then(function(r) {
          return r.data;
        });
    }

    function logout() {
      return $http.get(API_BASE_URL + '/users/logout')
        .then(function(r){
          return r.data;
        })
    }

    function createUser(userData) {
      return $http.post(API_BASE_URL + '/users', userData)
        .then(function(r){
          return r.data;
        })
    }

    function getCurrentUser() {
      return $http.get(API_BASE_URL + '/users/me')
        .then(function(r){
          return r.data;
        })
    }

    function getAllUsers() {

    }

    function getUser(userId) {

    }

    function updateUser(userId, userData) {

    }

    function deleteUser(userId) {

    }
  });
