angular
  .module('ninja.user')
  .factory('userService', function($http, $cookies, $timeout, API_BASE_URL) {
    return {
      login: login,
      logout: logout,
      createUser: createUser,
      getUser: getUser,
      getCurrentUser: getCurrentUser,
      getAllUsers: getAllUsers,
      updateUser: updateUser,
      deleteUser: deleteUser
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
        .then(function(r) {
          return r.data;
        })
    }

    function createUser(userData) {
      return $http.post(API_BASE_URL + '/users', userData)
        .then(function(r) {
          return r.data;
        })
    }

    function getCurrentUser() {
      return $http.get(API_BASE_URL + '/users/me')
        .then(function(r) {
          return r.data;
        });
    }

    function getAllUsers() {
      return $http.get(API_BASE_URL + '/users')
        .then(function(r) {
          return r.data;
        });
    }

    function getUser(userId) {
      return $http.get(API_BASE_URL + '/users/' + userId)
        .then(function(r) {
          return r.data;
        });
    }

    function updateUser(userId, userData) {
      return $http.put(API_BASE_URL + '/users/' + userId, userData)
        .then(function(r) {
          return r.data;
        });
    }

    function deleteUser(userId) {
      return $http.delete(API_BASE_URL + '/users/' + userId)
        .then(function(r) {
          return r.data;
        });
    }
  });
