// external modules
import {Component}  from 'angular2/core';
import {OnInit}     from 'angular2/core';

// application modules
import {Hero}                   from './hero';
import {HeroService}            from './hero.service'
import {HeroDetailComponent}    from './hero-detail.component';

// a class becomes an Angular component when we give it metadata. Angular needs the metadata to understand how to construct the view and how the component interacts with other parts of the application.
@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <hero-detail [hero]="selectedHero"></hero-detail>

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
   `],
    providers:  [HeroService],
    directives: [HeroDetailComponent]
})

// controller per la view utilizzata nel class decorator
export class AppComponent{

    public title        : string   = 'Tour of Hero';
    public heroes       : Hero[];
    public selectedHero : Hero;

    constructor(private _heroService: HeroService) {
        // don't call some providers inside constructors
    }

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes(){
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
}


