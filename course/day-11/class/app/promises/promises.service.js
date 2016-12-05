angular
  .module('unrelated.promises')
  .factory('promisesService', function($timeout){
    return {
      getNameSync: getNameSync,
      getNameAsync: getNameAsync,
      getBestChinese: getBestChinese,
      getSecondBestChinese: getSecondBestChinese
    };

    function getNameSync() {
      return 'Bruce Lee';
    }

    function getNameAsync() {
      var promise =  $timeout(function(){
        return 'Jackie Chan';
      }, 2000);
      return promise;
    }

    function getBestChinese() {
      return $timeout(function(){
        return 'Bruce Lee';
      }, 3000);
    }

    function getSecondBestChinese() {
      return $timeout(function(){
        return 'Jackie Chan';
      }, 5000);
    }

  })
