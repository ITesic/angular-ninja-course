angular
  .module('ninja.contact')
  .controller('ContactCtrl', function($scope, contactService, $stateParams){

    $scope.contact = {};

    if ($stateParams.contact) {
      $scope.contact = $stateParams.contact;
    } else if ($stateParams.id) {
      contactService.getContact($stateParams.id)
        .then(function(contact){
          $scope.contact = contact;
        });
    }

    $scope.fullName = function() {
      return contactService.fullName($scope.contact);
    }

    $scope.toggleFavorite = function() {
      contactService.toggleFavorite($scope.contact);
      contactService.updateContact($scope.contact.id, $scope.contact);
    }

    $scope.isContactOpen = function() {
      return !!($scope.contact.firstName || $scope.contact.lastName);
    }

  });
