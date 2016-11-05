angular
    .module('phonebook')
    .controller('PhonebookCtrl',
        function($scope) {
            "use strict";

            $scope.user = 'Anonimous';

            $scope.names = [
              'Ilija',
              'Alma',
              'Mirha',
              'Adi',
              'Vedran',
              'Jasmina',
              'Aldin',
              'Nedim',
              'Dejan'
            ];
        });
