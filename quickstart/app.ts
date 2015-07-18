// import the type definitions from Angular
/// <reference path="typings/angular2/angular2.d.ts" />

// above import statement uses ES6 module syntax to import three symbols from the Angular module
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: `
    <div class="row">
        <h3>Quickstart Angular 2</h3>
    </div>
    <div class="row">
        <p>My name: {{ name }}</p>
    </div>
   `
})

// Component controller
class MyAppComponent{

    public name: string;

    constructor(){
        this.name = 'Paolo';
    }

}


// to load your new component into its page
bootstrap(MyAppComponent);