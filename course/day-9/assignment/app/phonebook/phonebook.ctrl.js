angular
    .module('phonebook')
    .controller('PhonebookCtrl',
        function($rootScope, $scope, $filter, $state, phonebookService, contactService) {
          $scope.contacts = phonebookService.contacts;

          $scope.open = function(contact) {
            $state.go('kontakt', {
              contact: contact
            });
          }

          $scope.edit = function(contact) {
            $state.go('izmjena-kontakta', {
              contact: contact
            });
          }

          $scope.delete = function(contact) {
            phonebookService.removeContact(contact)
          }
        });
