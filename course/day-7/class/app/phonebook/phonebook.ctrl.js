angular
    .module('phonebook')
    .controller('PhonebookCtrl',
        function($rootScope, $scope, $filter, phonebookService) {

            $scope.contacts = phonebookService.contacts;

            $scope.open = function(contact) {
              phonebookService.selectContact(contact);
            }

            $scope.delete = function(contact) {
              phonebookService.removeContact(contact)
            }
        });
