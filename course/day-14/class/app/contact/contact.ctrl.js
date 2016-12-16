angular
  .module('ninja.contact')
  .controller('ContactCtrl', function($scope, contactService, $stateParams){

    /* Pocetna vrijednost */
    $scope.contact = {};

    /* Ako iz ContactsCtrl posaljemo Contact objekat onda njega prikazemo,
     * necemo slati request na server. Ako imamo samo id kontakta, onda saljemo request. */
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

    /* Promjenimo favorite i onda ga snimimo na API.
     Na API saljemo samo onaj parametar koji mijenjamo, nema potrebe da saljemo cijelog kontakta */
    $scope.toggleFavorite = function() {
      $scope.contact.favorite = !$scope.contact.favorite;
      contactService.updateContact($scope.contact.id, {
        favorite: $scope.contact.favorite
      });
    }
  });
