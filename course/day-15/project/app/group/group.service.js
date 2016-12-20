angular
  .module('ninja.group')
  .service('groupService', function($http, $cookies, API_BASE_URL) {

    this.createGroup = function(groupData) {
      return $http.post(API_BASE_URL + '/groups', groupData)
        .then(function(r){
          return r.data;
        });
    };

    this.getGroups = function() {
      return $http.get(API_BASE_URL + '/groups', {
        headers: {
          sid: $cookies.sid
        }
      })
        .then(function(response){
          return response.data;
        })
    };

    this.getGroup = function(id) {
      return $http.get(API_BASE_URL + '/groups/' + id)
        .then(function(response){
          return response.data;
        })
    };

    this.updateGroup = function(id, groupData) {
      return $http.put(API_BASE_URL + '/groups/' + id, groupData)
        .then(function(r){
          return r.data;
        });
    }

    this.deleteGroup = function(id) {
      return $http.delete(API_BASE_URL + '/groups/' + id);
    }

    this.getGroupByName = function(groupName) {
      var i;
      for (i = 0; i < this.groups.length; i++) {
        if (this.groups[i].name === groupName) {
          return this.groups[i];
        }
      }
    };

    this.reduceGroupsNames = function(groups) {
      var i;
      var groupsNames = [];

      for (i = 0; i < groups.length; i++) {
        groupsNames.push(groups[i].name);
      }

      return groupsNames;
    }

    this.reduceGroupsIds = function(groups) {
      var i;
      var groupsIds = [];

      for (i = 0; i < groups.length; i++) {
        groupsIds.push(groups[i].id);
      }

      return groupsIds;
    }

    this.getGroupsNames = function() {
      return this.reduceGroupsNames(this.groups);
    };

    this.deleteGroupByName = function(groupName) {
      var group = this.getGroupByName(groupName);
      console.log(groupName);
      console.log(group);
      this.deleteGroup(group);
    };

  });
