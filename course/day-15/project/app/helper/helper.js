angular
  .module('ninja.helper')
  .factory('helper', function(){
    return {
      removeFromList: removeFromList,
      parseErrors: parseErrors
    }

    /**
     * Funkcija brise element iz liste
     * Funkcija je mutirajuca (mijenja originalnu listu)
     * @param  {object|string|number} item Element iz liste
     * @param  {array} list Lista
     */
    function removeFromList(item, list) {
      var i = list.indexOf(item);
      if (i > -1) {
        list.splice(i, 1);
      }
    }

    function parseErrors(e) {
      if(!e){
        return;
      }
      var errors = [];
      if (e.errors) { // if array of errors
        for(error in e.errors) {
          errors.push(error);
        }
      } else {
        errors.push(e);
      }
      return errors;
    }
  });
