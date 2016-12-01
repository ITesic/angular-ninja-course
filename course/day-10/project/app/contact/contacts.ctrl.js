angular
    .module('ninja.contact')
    .controller('ContactsCtrl',
        function($rootScope, $scope, $filter, $state, contactService) {
          $scope.contacts = contactService.contacts;

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
            contactService.deleteContact(contact)
          }
        });
