import {Component} from 'angular2/core';

// don't generate code if it isn't used
interface Hero{
    id:     number;
    name:   string;
}


// a class becomes an Angular component when we give it metadata. Angular needs the metadata to understand how to construct the view and how the component interacts with other parts of the application.
@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><input [(ngModel)]="hero.name" placeholder="name"></div>
  `
})

// controller per la view utilizzata nel class decorator
export class AppComponent{

    public title        = 'Tour of Hero';

    public hero: Hero   = {
        id:     1,
        name:   'Windstorm'
    };

}