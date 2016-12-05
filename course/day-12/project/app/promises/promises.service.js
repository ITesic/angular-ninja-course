angular
  .module('unrelated.promises')
  .factory('promisesService', function($timeout, $q){
    return {
      getDataSync: getDataSync,
      getDataAsync: getDataAsync,
      getBestChinese: getBestChinese,
      getSecondBestChinese: getSecondBestChinese
    }

    function getDataSync() {
      return {
        firstName: 'Jackie',
        lastName: 'Chan'
      }
    }

    function getDataAsync() {
      return $timeout(function(){
        return {
          firstName: 'Bruce',
          lastName: 'Lee'
        }
      }, 3000);
    }

    function getBestChinese() {
      return $timeout(function(){
        return {
          firstName: 'Bruce',
          lastName: 'Lee'
        }
      }, 5000);
    }

    function getSecondBestChinese() {
      return $timeout(function(){
        return {
          firstName: 'Jackie',
          lastName: 'Chan'
        }
      }, 3000);
    }
  })
