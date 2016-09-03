// your code goes here

/**
* A basic hello-world Angular 2 app
*/

import {
    NgModule,
    Component
} from '@angular/core';

import { BrowserModule }            from '@angular/platform-browser';
import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-world',
    template: `
    <div>
        Hello World Paolo
    </div>
    `
})

class HelloWordComponent{ }

@NgModule({
    declarations:   [ HelloWordComponent ],
    imports:        [ BrowserModule ],
    bootstrap:      [ HelloWordComponent ],
})

class HelloWordAppModule{ }

platformBrowserDynamic().bootstrapModule(HelloWordAppModule);