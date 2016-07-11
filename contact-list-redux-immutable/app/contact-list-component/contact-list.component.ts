import { Component }        from '@angular/core';
import { ContactStore }     from '../contact-store';
import { ContactComponent } from '../contact-component/contact.component';
import { addContact }       from '../actions';

@Component({
    selector:       'contact-list-component',
    templateUrl:    'app/contact-list-component/contact-list.html',
    styleUrls:      ['app/contact-list-component/contact-list.css'],
    directives:     [ContactComponent]
})

export class ContactListComponent {

    contactID: number;

    constructor(private store: ContactStore){
        this.contactID = 0;
    }

    addContact(contact) {
        this.store.dispatch(addContact(contact, this.contactID++));
    }


}
