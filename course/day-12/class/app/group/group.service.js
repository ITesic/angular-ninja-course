angular
  .module('ninja.group')
  .service('groupService', function($http, API_BASE_URL) {
    this.group = {
      name: '',
      description: ''
    }

    this.groups = [{
      name: 'family',
      description: 'Group for family members'
    }, {
      name: 'friends',
      description: 'Group for friends'
    }, {
      name: 'work',
      description: 'Group for work collegues'
    }, {
      name: 'faculty',
      description: 'Group for faculty collegues'
    }, {
      name: 'enemy',
      description: 'Group for arch enemies'
    }];

    this.getGroups = function() {
      return $http({
          method: 'GET',
          url: API_BASE_URL + '/groups'
        })
        .then(function(response){
          return response.data;
        });
    };

    this.getGroup = function(id) {
      return $http.get(API_BASE_URL + '/groups/' + id)
        .then(function(r){
          return r.data;
        });
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
