System.register(['./hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hero_1;
    return {
        setters:[
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            // that identifies the application part under test
            describe('Hero', function () {
                it('has name given in the constructor', function () {
                    var hero = new hero_1.Hero(1, 'Super Cat');
                    expect(hero.name).toEqual('Super Cat');
                });
                it('has id given in the constructor', function () {
                    var hero = new hero_1.Hero(1, 'Super Cat');
                    expect(hero.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map