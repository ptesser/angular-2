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

    <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </div>
    </div>

    <h2>My Heroes</h2>
    <ul class="heroes">
    <!-- the leading asterisk (*) in front of ngFor is a critical part of this syntax. -->
    <!-- the (*) prefix to ngFor indicates that the <li> element and its children constitute a master template -->
        <li *ngFor="#hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
  `,
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
   `]
})

// controller per la view utilizzata nel class decorator
export class AppComponent{

    public title : string   = 'Tour of Hero';
    public heroes           = HEROES;
    public selectedHero : Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}


var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];