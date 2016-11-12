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
        duguje: 500
    }, {
        firstName: 'Mico',
        lastName: 'Micic',
        birthday: new Date('05/08/1992'),
        city: 'Bijeljina',
        phone: '066 897 435',
        email: 'mico@klika.ba',
        skype: 'mico.micic',
        duguje: 403
    }, {
        firstName: 'Janko',
        lastName: 'Jankovic',
        birthday: new Date('12/10/1994'),
        city: 'Bugojno',
        phone: '065 456 324',
        email: 'marko@klika.ba',
        skype: 'marko.markovic',
        duguje: 434
    }, {
        firstName: 'Janko',
        lastName: 'Andric',
        birthday: new Date('12/10/1994'),
        city: 'Bugojno',
        phone: '065 456 324',
        email: 'marko@klika.ba',
        skype: 'marko.markovic',
        duguje: 0
    }];

    this.selectedContact = {};

    this.selectContact = function(contact) {
      angular.extend(this.selectedContact, contact);
    }

    this.removeContact = function(contact) {
      var i = this.contacts.indexOf(contact);
      this.contacts.splice(i, 1);
    }

  });
