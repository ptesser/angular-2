System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3, core_4;
    var TodoItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
            }],
        execute: function() {
            TodoItemComponent = (function () {
                function TodoItemComponent() {
                    this.remove = new core_4.EventEmitter();
                }
                TodoItemComponent.prototype.removeItem = function () {
                    this.remove.next(this.item);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object)
                ], TodoItemComponent.prototype, "item", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], TodoItemComponent.prototype, "remove", void 0);
                TodoItemComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        templateUrl: 'app/todoitem/todoitem.html',
                        styleUrls: ['app/todoitem/todoitem.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemComponent);
                return TodoItemComponent;
            })();
            exports_1("default", TodoItemComponent);
        }
    }
});

//# sourceMappingURL=../../maps/app/todoitem/todoitem.component.js.map
