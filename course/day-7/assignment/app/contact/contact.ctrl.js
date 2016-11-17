angular
  .module('contact')
  .controller('ContactCtrl', function($scope, contactService){
    $scope.contact = contactService.contact;

    $scope.fullName = function() {
      return contactService.fullName();
    }

    $scope.toggleFavorite = function() {
      contactService.toggleFavorite();
    }

    $scope.isContactOpen = function() {
      return !!($scope.contact.firstName || $scope.contact.lastName);
    }

  });
