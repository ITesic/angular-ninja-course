angular
  .module('ninja.user')
  .controller('UsersCtrl', function($scope, $state, userService, helper){
    $scope.users = [];

    /* Dohvatamo korisnike sa servera.
     * U slucaju greske hvatamo je i ispisujemo u konzolu. */
    userService.getAllUsers()
      .then(function(users){
        $scope.users = users;
      })
      .catch(function(e){
        console.error(e);
      });

    $scope.sortField = 'firstName';
    $scope.order = 'asc';

    $scope.sort = function(sortField) {
      if ($scope.sortField == sortField) {
        $scope.toggleSortOrder();
      } else {
        $scope.sortField = sortField;
      }
    }

    $scope.toggleSortOrder = function(){
      $scope.order = ($scope.order == 'asc') ? 'desc' : 'asc';
    }

    /* Otvara state user i prosledjuje mu User objekat i id usera */
    $scope.open = function(user) {
      $state.go('user', {
        user: user,
        id: user.id
      });
    }

    /* Otvara state edit-user i prosledjuje mu User objekat i id usera */
    $scope.edit = function(user) {
      $state.go('edit-user', {
        user: user,
        id: user.id
      });
    }

    /* Brisemo usera sa APIja pa onda iz lokalne liste */
    $scope.delete = function(user) {
      userService.deleteUser(user.id)
        .then(function(){
          helper.removeFromList(user, $scope.users);
        })
    }

  })
