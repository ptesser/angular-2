import {Injectable} from 'angular2/core';

import {HEROES}     from './mock-hero';

@Injectable()

export class HeroService{

    /**
     *
     * @returns {Promise<Hero[]>}
     */
    getHeroes(){
        return Promise.resolve(HEROES);
    }

    /**
     *
     * @returns {Promise<Hero[]>}
     */
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

}