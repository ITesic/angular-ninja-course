angular
  .module('ninja.group')
  .config(function($stateProvider){
    $stateProvider
    .state('groups', {
      url: '/groups',
      templateUrl: 'app/group/templates/groups.html',
      controller: 'GroupsCtrl'
    })
    .state('group', {
      url: '/group/:id',
      templateUrl: 'app/group/templates/group.html',
      controller: 'GroupCtrl',
      params: {
        id: null,
        group: null
      }
    })
    .state('new-group', {
      url: '/new-group',
      controller: 'NewGroupCtrl',
      templateUrl: 'app/group/templates/new-group.html'
    })
    .state('edit-group', {
      url: '/edit-group/:id',
      controller: 'EditGroupCtrl',
      templateUrl: 'app/group/templates/edit-group.html',
      params: {
        id: null,
        group: null
      }
    })
  })
