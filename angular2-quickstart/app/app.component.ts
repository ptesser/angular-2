import {Component} from 'angular2/core';

// a class becomes an Angular component when we give it metadata. Angular needs the metadata to understand how to construct the view and how the component interacts with other parts of the application.
@Component({
    selector: 'app',
    template: '<h1>My first Angular 2 app</h1>'
})

// class is empty because we don't need it to do anything in this QuickStart
export class AppComponent{ }