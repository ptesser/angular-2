import { Contact as ContactModel } from './contact-store';


// in Redux, actions must have a type property which describes the type of the action being executed
// other than this, you can set up the structure of an action any way you like
export interface IContactAction {
    type:   string;
    id:     number;
    name?:  string; // opzionale
}

export function addContact(name: string, id: number): IContactAction {
    return {
        type: 'ADD',
        id,
        name
    };
}

export function removeContact(id: number): IContactAction {
    return {
        type: 'REMOVE',
        id
    };
}

export function starContact(id: number): IContactAction {
    return {
        type: 'STAR',
        id
    };
}