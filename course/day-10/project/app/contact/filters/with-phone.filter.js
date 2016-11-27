angular
  .module('ninja.contact')
  .filter('withPhone', function(){

    function withPhoneFilter(contacts){
      var filtered = [];
      for(var i = 0; i < contacts.length; i++) {
        if(contacts[i].phone) {
          filtered.push(contacts[i]);
        }
      }
      return filtered;
    }

    return withPhoneFilter;
  })
