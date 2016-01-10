import {Component}      from 'angular2/core';
import {Input}          from 'angular2/core';
import {Output}         from 'angular2/core';
import {EventEmitter}   from 'angular2/core';

import {ITodoItem} from './../todostore/todoitem';

@Component({
    selector:       'todo-item',
    templateUrl:    'app/todoitem/todoitem.html',
    styleUrls:      ['app/todoitem/todoitem.css']
})

export default class TodoItemComponent {
    // decorator indicates that the property is part of the components public API and can be bound to
    @Input()
    item: ITodoItem;

    @Output()
    remove = new EventEmitter();    // attach a new event that can be used in the component selector

    removeItem() {
        this.remove.next(this.item);
    }

}
