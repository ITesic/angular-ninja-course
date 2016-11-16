angular
  .module('contact')
  .controller('ContactCtrl', function($scope, contactService){
    $scope.contact = contactService.contact;

    $scope.fullName = contactService.fullName;
    $scope.toggleFavorite = contactService.toggleFavorite;

    $scope.isContactOpen = function() {
      return !!($scope.contact.firstName || $scope.contact.lastName);
    }
  });
