import Immutable = require('immutable');

export class Contact {
    name: String;
    star: boolean;
}

export class ContactStore {

    // https://facebook.github.io/immutable-js/docs/#/List
    contacts = Immutable.List<Contact>();

    constructor(){}

    /**
     * Metodo che aggiunge un contattato alla lista.
     * 
     * @param {string} newContact Nome del nuovo contatto
     */
    addContact(newContact: String){

        if (newContact){
            // always generate a new array
            this.contacts = this.contacts.push({
                name: newContact,
                star: false
            });
        }

    }

    /**
     * Metodo che rimuove un contatto dalla lista.
     * 
     * @param {Contact} contact Oggetto contenente il contatto da rimuovere
     */
    removeContact(contact: Contact){
        const index     = this.contacts.indexOf(contact);
        this.contacts   = this.contacts.delete(index);
    }

    /**
     * Metodo che aggiunge/rimuove la star dai contatti.
     * 
     * @param {Contact} contact Oggetto contenente il contatto da togliere/aggiungere la star.
     */
    starContact(contact: Contact){
        const index     = this.contacts.indexOf(contact);
        // <any>: TypeScript type assertion to prevent compiler errors when returning an updated contact object
        // References solution for this issue: https://github.com/facebook/immutable-js/issues/684#issuecomment-153812280
        this.contacts   = (<any>this.contacts).update(index, (contact) => {
            return {
                name: contact.name,
                star: !contact.star
            }
        });
    }

}