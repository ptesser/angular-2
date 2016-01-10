System.register(['angular2/core', './../todostore/todostore', './../todoitem/todoitem.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, todostore_1, todoitem_component_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (todostore_1_1) {
                todostore_1 = todostore_1_1;
            },
            function (todoitem_component_1_1) {
                todoitem_component_1 = todoitem_component_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(store) {
                    this.newItem = 'test';
                    this.store = store;
                }
                TodoList.prototype.addItem = function () {
                    this.store.addItem(this.newItem);
                    this.newItem = '';
                };
                TodoList.prototype.removeItem = function (itemToRemove) {
                    this.store.removeItem(itemToRemove);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: 'app/todolist/todolist.html',
                        styleUrls: ['app/todolist/todolist.css'],
                        directives: [todoitem_component_1.default],
                        encapsulation: core_2.ViewEncapsulation.Native
                    }), 
                    __metadata('design:paramtypes', [todostore_1.TodoStore])
                ], TodoList);
                return TodoList;
            })();
            exports_1("default", TodoList);
        }
    }
});

//# sourceMappingURL=../../maps/app/todolist/todolist.component.js.map
