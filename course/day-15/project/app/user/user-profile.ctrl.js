angular
  .module('ninja.user')
  .controller('UserProfileCtrl', function($scope){
    $scope.user = {
      image: 'profile-image.jpg',
      name: 'Mačak Tošo',
      birthday: new Date('10/26/2016'),
      city: 'Bugojno',
      email: 'macak.toso@gmail.com',
      skype: 'macak.toso'
    }
  })
