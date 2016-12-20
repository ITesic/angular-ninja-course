angular
    .module('ninja.user')
    .controller('NewUserCtrl', function($scope, userService, $state) {

        $scope.newUser = {
            firstName: '',
            lastName: '',
            city: '',
            email: '',
            phone: '',
            skype: ''
        };

        /* Snimamo kontakta na API a zatim odlazimo na stranicu sa listom kontakata */
        $scope.saveUser = function() {
            userService.createUser($scope.newUser)
                .then(function(newUser) {
                    $state.go('users');
                });
        }

    });
