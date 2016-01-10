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
                TodoStore.prototype.removeItem = function (removedItem) {
                    var index = this.items.indexOf(removedItem);
                    this.items.splice(index, 1);
                };
                return TodoStore;
            })();
            exports_1("TodoStore", TodoStore);
        }
    }
});

//# sourceMappingURL=../../maps/app/todostore/todostore.js.map
