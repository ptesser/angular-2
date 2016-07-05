import { Component }        from '@angular/core';
import { ContactStore }     from './contact-store';
import { ContactComponent } from './contact.component';

@Component({
    selector:       'contact-list-component',
    templateUrl:    'app/contact-list.html',
    styleUrls:      ['app/contact-list.css'],
    directives:     [ContactComponent]
})

export class ContactListComponent {

    constructor(private store: ContactStore){}

    addContact(contact) {
        this.store.addContact(contact);
    }

}
