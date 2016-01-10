import {Component} from 'angular2/core';


// code imports the Component decorator, a new feature in TypeScript 1.5 which is based on an ES7 proposal
@Component({
    selector:       'todo-list',
    templateUrl:    'app/todolist/todolist.html',
    styleUrls:      ['app/todolist/todolist.css'],
    // encapsulation:  ViewEncapsulation.Native     //  using real web components for CSS scope
})


export default class TodoList {

}
