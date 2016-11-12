angular
    .module('phonebook')
    .controller('PhonebookCtrl',
        function($rootScope, $scope, $filter, phonebookService) {
            "use strict";

            $scope.contacts = phonebookService.contacts;
            $scope.selectedContact = {};

            $scope.sortedNames = $filter('orderBy')($scope.names);

            $scope.fullName = function(contact) {
                return contact.firstName + ' ' + conact.lastName;
            }

            $scope.open = function (contact) {
              phonebookService.selectContact(contact);
            }

            $scope.delete = function (contact) {
              phonebookService.removeContact(contact);
            }
        });
