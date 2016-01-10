System.register(['angular2/platform/browser', './todolist/todolist.component', './todostore/todostore'], function(exports_1) {
    var browser_1, todolist_component_1, todostore_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todolist_component_1_1) {
                todolist_component_1 = todolist_component_1_1;
            },
            function (todostore_1_1) {
                todostore_1 = todostore_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todolist_component_1.default, [todostore_1.TodoStore]);
        }
    }
});

//# sourceMappingURL=../maps/app/bootstrap.js.map
