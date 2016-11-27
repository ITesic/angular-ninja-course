angular
    .module('ninja.phonebook')
    .controller('PhonebookCtrl',
        function($rootScope, $scope, $filter, $state, phonebookService, contactService) {
          $scope.contacts = phonebookService.contacts;

          $scope.open = function(contact) {
            $state.go('contact', {
              contact: contact
            });
          }

          $scope.edit = function(contact) {
            $state.go('edit-contact', {
              contact: contact
            });
          }

          $scope.delete = function(contact) {
            phonebookService.removeContact(contact)
          }
        });
