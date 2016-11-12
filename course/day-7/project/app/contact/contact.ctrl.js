angular
  .module('contact')
  .controller('ContactCtrl', function($scope, phonebookService){
    $scope.contact = phonebookService.selectedContact;
  })
