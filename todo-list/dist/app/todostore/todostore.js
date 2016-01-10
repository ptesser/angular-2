System.register([], function(exports_1) {
    var TodoStore;
    return {
        setters:[],
        execute: function() {
            TodoStore = (function () {
                function TodoStore() {
                    this.items = [];
                }
                TodoStore.prototype.addItem = function (newItem) {
                    this.items.push({
                        text: newItem
                    });
                };
                return TodoStore;
            })();
            exports_1("TodoStore", TodoStore);
        }
    }
});

//# sourceMappingURL=../../maps/app/todostore/todostore.js.map
