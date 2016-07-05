
export class Contact {
    name: String;
    star: boolean;
}

export class ContactStore {

    contacts: Contact[];

    constructor(){
        this.contacts = [];
    }

    /**
     * Metodo che aggiunge un contattato alla lista.
     * 
     * @param {string} newContact Nome del nuovo contatto
     */
    addContact(newContact: String){

        if (newContact){

            this.contacts.push({
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
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }

    /**
     * Metodo che aggiunge/rimuove la star dai contatti.
     * 
     * @param {Contact} contact Oggetto contenente il contatto da togliere/aggiungere la star.
     */
    starContact(contact: Contact){
        const index = this.contacts.indexOf(contact);
        this.contacts[index].star = !this.contacts[index].star;
    }

}