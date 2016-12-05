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
      url: '/group',
      templateUrl: 'app/group/templates/group.html',
      controller: 'GroupCtrl',
      params: {
        group: {}
      }
    })
    .state('new-group', {
      url: '/new-group',
      controller: 'NewGroupCtrl',
      templateUrl: 'app/group/templates/new-group.html'
    })
    .state('edit-group', {
      url: '/edit-group',
      controller: 'EditGroupCtrl',
      templateUrl: 'app/group/templates/edit-group.html',
      params: {
        group: {}
      }
    })
  })
