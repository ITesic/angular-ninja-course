angular
    .module('ninja.contact')
    .service('contactService', function() {

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

        this.contacts = [{
            firstName: 'ilija',
            lastName: 'tesic',
            birthday: new Date('03/06/1989'),
            city: 'Istocno Sarajevo',
            phone: '066 123 456',
            email: 'ilija@klika.ba',
            skype: 'itesic.me',
            gender: 'm',
            favorite: true,
            groups: [{
                name: 'family',
                description: 'Group for family members'
            }]
        }, {
            firstName: 'Mico',
            lastName: 'MICIC',
            birthday: new Date('05/08/1992'),
            city: 'Bijeljina',
            phone: '066 897 435',
            email: 'mico@klika.ba',
            skype: 'mico.micic',
            gender: 'm',
            favorite: false,
            groups: [{
                name: 'family',
                description: 'Group for family members'
            }, {
                name: 'work',
                description: 'Group for work collegues'
            }, {
                name: 'faculty',
                description: 'Group for faculty collegues'
            }]
        }, {
            firstName: 'JankO',
            lastName: 'jankovic',
            birthday: new Date('12/10/1994'),
            city: 'Bugojno',
            phone: '',
            email: 'marko@klika.ba',
            skype: 'marko.markovic',
            gender: 'm',
            favorite: false,
            groups: [{
                name: 'work',
                description: 'Group for work collegues'
            }, {
                name: 'faculty',
                description: 'Group for faculty collegues'
            }]
        }, {
            firstName: 'Milica',
            lastName: 'Milic',
            birthday: new Date('12/10/1994'),
            city: 'Bugojno',
            phone: '065 456 324',
            email: 'marko@klika.ba',
            skype: 'marko.markovic',
            gender: 'z',
            favorite: false,
            groups: [{
                name: 'family',
                description: 'Group for family members'
            }, {
                name: 'friends',
                description: 'Group for friends'
            }, {
                name: 'enemy',
                description: 'Group for arch enemies'
            }]
        }];

        this.getContacts = function() {
            return this.contacts;
        };

        this.getContactsByGroupName = function(groupName) {
            var i, j;
            var contactsInGroup = [];

            for (i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].groups.length) {
                    for (j = 0; j < this.contacts[i].groups.length; j++) {
                        if (this.contacts[i].groups[j].name == groupName) {
                            contactsInGroup.push(this.contacts[i]);
                        }
                    }
                }
            }

            return contactsInGroup;
        };

        this.createContact = function(contact) {
            this.contacts.push(angular.copy(contact));
        };

        this.deleteContact = function(contact) {
            var i = this.contacts.indexOf(contact);
            this.contacts.splice(i, 1);
        };

        this.toggleFavorite = function(contact) {
            contact.favorite = !contact.favorite;
        };

        this.fullName = function(contact) {
            return contact.firstName + ' ' + contact.lastName;
        };
    });
