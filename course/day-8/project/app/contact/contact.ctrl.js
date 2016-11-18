angular
  .module('contact')
  .controller('ContactCtrl', function($scope, contactService, $stateParams){

    $scope.contact = $stateParams.contact;

    $scope.fullName = function() {
      return contactService.fullName($scope.contact);
    }

    $scope.toggleFavorite = function() {
      contactService.toggleFavorite($scope.contact);
    }

    $scope.isContactOpen = function() {
      return !!($scope.contact.firstName || $scope.contact.lastName);
    }

  });
