angular
    .module('ninja.contact')
    .service('contactService', function($http, API_BASE_URL) {

        this.createContact = function(contactData) {
            return $http.post(API_BASE_URL + '/contacts', contactData)
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

        //TODO: Ponovo implementirati ovu funkcionalnost

        this.filterContactsByGroupName = function(contacts, groupName) {

            var i, j;
            var contactsInGroup = [];

            for (i = 0; i < contacts.length; i++) {
                if (contacts[i].groups && contacts[i].groups.length) {
                    for (j = 0; j < contacts[i].groups.length; j++) {
                        if (contacts[i].groups[j].name == groupName) {
                            contactsInGroup.push(contacts[i]);
                        }
                    }
                }
            }

            return contactsInGroup;
        };

        this.fullName = function(contact) {
            return contact.firstName + ' ' + contact.lastName;
        };
    });
