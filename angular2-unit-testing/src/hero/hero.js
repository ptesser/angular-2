System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var nextId, Hero;
    return {
        setters:[],
        execute: function() {
            nextId = 30;
            Hero = (function () {
                function Hero(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                    this.id = id || nextId++;
                }
                Hero.prototype.clone = function () {
                    return Hero.clone(this);
                };
                Hero.setNextId = function (next) { nextId = next; };
                Hero.clone = function (h) { return new Hero(h.id, h.name, h.alterEgo, h.power); };
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map