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

/**
 * 
 * @class HelloWordComponent
 */
@Component({
    selector: 'hello-world',
    template: `
    <div>
        Hello World guy:
        <ul>
            <li *ngFor="let name of names">{{ name }}</li>
        </ul>
    </div>
    `
})

class HelloWordComponent{

    names: string[]; // or Array<string>

    constructor(){
        this.names = ['Paolo', 'Luca', 'Giulia'];
    }

}
/* ================================================= */

/**
 * 
 * @class HelloWordAppModule
 */
@NgModule({
    declarations:   [ HelloWordComponent ],
    imports:        [ BrowserModule ],
    bootstrap:      [ HelloWordComponent ],
})

class HelloWordAppModule{ }

platformBrowserDynamic().bootstrapModule(HelloWordAppModule);