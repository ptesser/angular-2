"use strict";
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var ContactStore = (function () {
    function ContactStore() {
        this.contacts = [];
    }
    /**
     * Metodo che aggiunge un contattato alla lista.
     *
     * @param {string} newContact Nome del nuovo contatto
     */
    ContactStore.prototype.addContact = function (newContact) {
        if (newContact) {
            this.contacts.push({
                name: newContact,
                star: false
            });
        }
    };
    /**
     * Metodo che rimuove un contatto dalla lista.
     *
     * @param {Contact} contact Oggetto contenente il contatto da rimuovere
     */
    ContactStore.prototype.removeContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    };
    /**
     * Metodo che aggiunge/rimuove la star dai contatti.
     *
     * @param {Contact} contact Oggetto contenente il contatto da togliere/aggiungere la star.
     */
    ContactStore.prototype.starContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts[index].star = !this.contacts[index].star;
    };
    return ContactStore;
}());
exports.ContactStore = ContactStore;
//# sourceMappingURL=contact-store.js.map