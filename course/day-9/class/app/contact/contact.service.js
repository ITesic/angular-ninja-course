angular
  .module('contact')
  .service('contactService', function (){
    this.contact = {
      firstName: '',
      lastName: '',
      birthday: '',
      city: '',
      phone: '',
      email: '',
      gender: '',
      groups: [],
      isFavorite: false
    };

    this.selectContact = function(contact) {
      angular.extend(this.contact, contact);
    }

    this.toggleFavorite = function(contact) {
      contact.favorite = !contact.favorite;
    }

    this.fullName = function(contact) {
      return contact.firstName + ' ' + contact.lastName;
    }
  });
