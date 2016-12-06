angular
    .module('ninja.contact')
    .service('contactService', function($http, API_BASE_URL) {

        this.createContact = function(contactData) {
            return $http.post(API_BASE_URL + '/contacts', contact)
                .then(function(resource) {
                    return resource.data;
                })
        };

        this.getContacts = function() {
            return $http({
                    method: 'GET',
                    url: API_BASE_URL + '/contacts'
                })
                .then(function(response) {
                    return response.data;
                });
        };

        this.getContact = function(contactId) {
            return $http.get(API_BASE_URL + '/contacts/' + contactId)
                .then(function(response) {
                    return response.data;
                });
        }

        this.updateContact = function(id, contactData) {
            return $http.put(API_BASE_URL + '/contacts/' + id, contactData)
                .then(function(response) {
                    return response.data;
                });
        }

        this.deleteContact = function(id) {
            return $http.delete(API_BASE_URL + '/contacts/' + id);
        };

        // this.getContactsByGroupName = function(groupName) {
        //     var i, j;
        //     var contactsInGroup = [];
        //
        //     for (i = 0; i < this.contacts.length; i++) {
        //         if (this.contacts[i].groups.length) {
        //             for (j = 0; j < this.contacts[i].groups.length; j++) {
        //                 if (this.contacts[i].groups[j].name == groupName) {
        //                     contactsInGroup.push(this.contacts[i]);
        //                 }
        //             }
        //         }
        //     }
        //
        //     return contactsInGroup;
        // };

        this.toggleFavorite = function(contact) {
            contact.favorite = !contact.favorite;
        };

        this.fullName = function(contact) {
            return contact.firstName + ' ' + contact.lastName;
        };
    });
