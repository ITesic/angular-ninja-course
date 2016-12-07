angular
    .module('ninja.contact')
    .controller('NewContactCtrl', function($scope, contactService, $state, groupService) {

        $scope.newContact = {
            firstName: '',
            lastName: '',
            city: '',
            email: '',
            phone: '',
            skype: '',
            gender: '',
            groups: [],
            favorite: false
        };

        /* Dohvatamo sve grupe da bi ih koristili u group-check-list direktivi */
        groupService.getGroups()
            .then(function(groups) {
                $scope.allGroups = groups;
            });

        /* Metoda koju pozivamo na svaku promjenu stanja u group-check-list
         * i selektovane grupe snimamo u kontakta. Posto na API-ju ocekujemo samo listu IDjeva grupa,
         * onda je potrebno da iz selektovanih grupa izdvojimo samo njihove IDjeve
         * pomocu metode reduce  */
        $scope.setContactGroups = function(groups) {
            $scope.newContact.groups = groupService.reduceGroupsIds(groups);
            console.log($scope.newContact.groups);
        }

        /* Snimamo kontakta na API a zatim odlazimo na stranicu sa listom kontakata */
        $scope.saveContact = function(contact) {
            contactService.createContact(contact)
                .then(function(newContact) {
                    $state.go('contacts');
                });
        }

    });
