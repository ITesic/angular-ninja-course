angular
    .module('phonebook')
    .controller('PhonebookCtrl',
        function($rootScope, $scope, $filter, phonebookService, contactService) {

            $scope.contacts = phonebookService.contacts;

            $scope.open = function(contact) {
              contactService.selectContact(contact);
            }

            $scope.delete = function(contact) {
              phonebookService.removeContact(contact)
            }
        });
