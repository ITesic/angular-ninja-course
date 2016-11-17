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

    this.toggleFavorite = function() {
      this.contact.isFavorite = !this.contact.isFavorite;
    }

    this.fullName = function() {
      return this.contact.firstName + ' ' + this.contact.lastName;
    }
  });
