import { Component, Input, ChangeDetectionStrategy }    from '@angular/core';
import { ContactStore, Contact as ContactModel}         from '../contact-store';
import { removeContact, starContact }                   from '../actions';

@Component({
    selector:       'contact-component',
    templateUrl :   'app/contact-component/contact.html',
    styleUrls:      ['app/contact-component/contact.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class ContactComponent {

    @Input()
    contact: ContactStore;

    constructor(private store: ContactStore) { }

    removeContact(contact) {
        this.store.dispatch(removeContact(contact.id));
    }

    starContact(contact) {
        this.store.dispatch(starContact(contact.id));
    }

}