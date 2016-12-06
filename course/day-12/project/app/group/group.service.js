angular
  .module('ninja.group')
  .service('groupService', function($http, API_BASE_URL) {

    this.getGroups = function() {
      return $http.get(API_BASE_URL + '/groups')
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

    this.createGroup = function(group) {
      this.groups.push(angular.copy(group));
    };

    this.updateGroup = function(group) {

    };

    this.deleteGroup = function(group) {
      var i = this.groups.indexOf(group);
      this.groups.splice(i, 1);
    };

    this.deleteGroupByName = function(groupName) {
      var group = this.getGroupByName(groupName);
      console.log(groupName);
      console.log(group);
      this.deleteGroup(group);
    };

  });
