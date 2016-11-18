angular
  .module('contact')
  .service('contactService', function (){

    this.selectContact = function(contact) {
      angular.extend(this.contact, contact);
    }

    this.toggleFavorite = function(contact) {
      contact.isFavorite = !contact.isFavorite;
    }

    this.fullName = function(contact) {
      return contact.firstName + ' ' + contact.lastName;
    }
  });
