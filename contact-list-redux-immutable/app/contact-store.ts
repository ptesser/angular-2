import Immutable = require('immutable');
import { createStore }      from 'redux';
import { IContactAction }   from './actions';
import { reducer }          from './reducer';

export class Contact {
    id:     number;
    name:   String;
    star:   boolean;
}

export class ContactStore {

    // https://facebook.github.io/immutable-js/docs/#/List
    store = createStore(reducer, Immutable.List<Contact>());

    get contacts(): Immutable.List<Contact> {
        return this.store.getState();
    }

    dispatch(action: IContactAction) {
        this.store.dispatch(action);
    }

}