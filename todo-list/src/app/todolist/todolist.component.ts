import {Component}          from 'angular2/core';
import {ViewEncapsulation}  from 'angular2/core';

import {ITodoItem}          from './../todostore/todoitem';
import {TodoStore}          from './../todostore/todostore';
import TodoItemComponent    from './../todoitem/todoitem.component';

// code imports the Component decorator, a new feature in TypeScript 1.5 which is based on an ES7 proposal
@Component({
    selector:       'todo-list',
    templateUrl:    'app/todolist/todolist.html',
    styleUrls:      ['app/todolist/todolist.css'],
    directives:     [TodoItemComponent],
    encapsulation:  ViewEncapsulation.Native     //  using real web components for CSS scope #shadow root
})


export default class TodoList {

    public newItem: string  = 'test';
    public store:   TodoStore;

    constructor(store: TodoStore) {
        this.store = store;
    }

    addItem() {
        this.store.addItem(this.newItem);
        this.newItem = '';
    }

    removeItem(itemToRemove: ITodoItem) {
        this.store.removeItem(itemToRemove);
    }

}
