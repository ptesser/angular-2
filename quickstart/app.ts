// import the type definitions from Angular
/// <reference path="typings/angular2/angular2.d.ts" />

// above import statement uses ES6 module syntax to import three symbols from the Angular module
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'

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