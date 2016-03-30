import {Component} from 'angular2/core';


@Component({
    selector:   'header-menu',
    template:   require ('./header-menu.html'),
    styles:     [require ('./header-menu.css')]

})

export class HeaderMenu{
    constructor(){
        console.log('Header Menu costruito');
    }

    ngOnInit(){
        console.log('Header Menu ngOnInit chiamato');
    }
}
