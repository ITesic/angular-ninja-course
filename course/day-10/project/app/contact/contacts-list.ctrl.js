angular
    .module('ninja.contact')
    .controller('ContactsListCtrl',
        function($rootScope, $scope, $filter, $state, contactService) {
          $scope.contacts = contactService.contacts;

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
            contactService.removeContact(contact)
          }
        });
