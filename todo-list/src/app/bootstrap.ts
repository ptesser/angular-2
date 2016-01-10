import {bootstrap}      from 'angular2/platform/browser';
import TodoList         from './todolist/todolist.component';
import {TodoStore}      from './todostore/todostore';

// todolist component is the application root
bootstrap(TodoList, [TodoStore]);
