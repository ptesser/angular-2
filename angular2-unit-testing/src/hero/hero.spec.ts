import {Hero} from './hero';

// that identifies the application part under test
describe('Hero', () => {

    it('has name given in the constructor', () => {
        let hero = new Hero(1, 'Super Cat');
        expect(hero.name).toEqual('Super Cat');
    })

    it('has id given in the constructor', () => {
        let hero = new Hero(1, 'Super Cat');
        expect(hero.id).toEqual(1);
    });

});
