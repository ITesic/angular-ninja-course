angular
  .module('ninja.contact')
  .controller('EditContactCtrl', function($scope, $state, $stateParams, contactService, groupService) {

    $scope.contact = {};

    if ($stateParams.contact) {
      // Ako smo dobili citav kontakt u $stateParams onda koristimo njega
      $scope.contact = $stateParams.contact;
    } else if ($stateParams.id) {
      // Ako smo dobili samo id u $stateParams onda dobavljamo kontakt sa APIja
      contactService.getContact($stateParams.id)
        .then(function(contact){
          $scope.contact = contact;
        });
    }

    /* Dohvatamo sve grupe da bi ih koristili u group-check-list direktivi */
    groupService.getGroups()
      .then(function(groups){
        $scope.allGroups = groups;
      });

    /* Metoda koju pozivamo na svaku promjenu stanja u group-check-list
     * i selektovane grupe snimamo u kontakta. Posto na API-ju ocekujemo samo listu IDjeva grupa,
     * onda je potrebno da iz selektovanih grupa izdvojimo samo njihove IDjeve
     * pomocu metode reduce  */
    $scope.setContactGroups = function(groups){
      $scope.contact.groups = groupService.reduceGroupsIds(groups);
      console.log($scope.contact.groups);
    }

    /* Snimamo kontakta na API i zatim odlazimo na stranicu sa listom kontakata */
    $scope.saveContact = function (contact) {
      contactService.updateContact(contact.id, contact)
        .then(function(newContact){
          $state.go('contacts');
        });
    }
  });
