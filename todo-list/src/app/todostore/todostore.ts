import {ITodoItem} from './todoitem';

export class TodoStore {
    items: ITodoItem[];

    constructor() {
        this.items = [];
    }

    addItem(newItem: string) {
        this.items.push({
            text: newItem
        });
    }


}
