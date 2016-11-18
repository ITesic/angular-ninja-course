angular
  .module('phonebook')
  .service('phonebookService', function() {

    this.contacts = [{
        firstName: 'Ilija',
        lastName: 'Tesic',
        birthday: new Date('03/06/1989'),
        city: 'Istocno Sarajevo',
        phone: '066 123 456',
        email: 'ilija@klika.ba',
        skype: 'itesic.me',
        gender: 'm',
        isFavorite: false
    }, {
        firstName: 'Mico',
        lastName: 'Micic',
        birthday: new Date('05/08/1992'),
        city: 'Bijeljina',
        phone: '066 897 435',
        email: 'mico@klika.ba',
        skype: 'mico.micic',
        gender: 'm',
        isFavorite: false
    }, {
        firstName: 'Janko',
        lastName: 'Jankovic',
        birthday: new Date('12/10/1994'),
        city: 'Bugojno',
        phone: '065 456 324',
        email: 'marko@klika.ba',
        skype: 'marko.markovic',
        gender: 'm',
        isFavorite: false
    }, {
        firstName: 'Milica',
        lastName: 'Milic',
        birthday: new Date('12/10/1994'),
        city: 'Bugojno',
        phone: '065 456 324',
        email: 'marko@klika.ba',
        skype: 'marko.markovic',
        gender: 'z',
        isFavorite: false
    }];

    this.removeContact = function(contact) {
      var i = this.contacts.indexOf(contact);
      this.contacts.splice(i, 1);
    }

    this.addContact = function(contact) {
      this.contacts.push(angular.copy(contact));
    }

  });
