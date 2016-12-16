angular
    .module('ninja.contact')
    .controller('ContactsCtrl',
        function($rootScope, $scope, $filter, $state, contactService, helper) {

          /* Dohvatamo kontakte sa servera. U slucaju greske hvatamo je i ispisujemo u konzolu. */
          contactService.getContacts()
            .then(function(contacts){
              $scope.contacts = contacts;
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

          /* Otvara state contact i prosledjuje mu Contact objekat i id kontakta */
          $scope.open = function(contact) {
            $state.go('contact', {
              contact: contact,
              id: contact.id
            });
          }

          /* Otvara state edit-contact i prosledjuje mu Contact objekat i id kontakta */
          $scope.edit = function(contact) {
            $state.go('edit-contact', {
              contact: contact,
              id: contact.id
            });
          }

          /* Brisemo kontakt sa APIja pa onda iz lokalne liste */
          $scope.delete = function(contact) {
            contactService.deleteContact(contact.id)
              .then(function(){
                helper.removeFromList(contact, $scope.contacts);
              })
          }
        });
