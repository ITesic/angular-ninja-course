angular
  .module('ninja')
  .controller('NinjaCtrl', function ($scope, $rootScope) {

    $scope.name = "Mačak Tošo";
    $scope.imagePath = "assets/img/profile-image.jpg";
    $scope.birthday = "01.01.1990";
    $scope.email = "macak.toso@gmail.com";

    $scope.skype = "macak.toso";

    $scope.macak = {
      name: "nesto",
      image: ""
    }

    $rootScope.covjek = {
      ime: 'Ilija'
    };

    $scope.covjek = {
      ime: "Nije Ilija"
    };
  });
