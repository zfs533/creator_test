
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/ballbattle/ballbattle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4501QiZfREjoB3z9oHZDqh', 'ballbattle');
// scene/ballbattle/ballbattle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = require("./ball");
var ballManager_1 = require("./ballManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallBattle = /** @class */ (function (_super) {
    __extends(BallBattle, _super);
    function BallBattle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preBall = null;
        return _this;
    }
    BallBattle.prototype.onLoad = function () {
        ballManager_1.default.init(this.node, this);
    };
    BallBattle.prototype.start = function () {
        var ball = cc.instantiate(this.preBall);
        ballManager_1.default.addBall(ball.getComponent(ball_1.default));
        this.node.addChild(ball);
    };
    /**
     * test
     */
    BallBattle.prototype.buttonTest = function () {
        ballManager_1.default.separate();
    };
    __decorate([
        property(cc.Prefab)
    ], BallBattle.prototype, "preBall", void 0);
    BallBattle = __decorate([
        ccclass
    ], BallBattle);
    return BallBattle;
}(cc.Component));
exports.default = BallBattle;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9iYWxsYmF0dGxlL2JhbGxiYXR0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLDZDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXFCQztRQWxCRyxhQUFPLEdBQWMsSUFBSSxDQUFDOztJQWtCOUIsQ0FBQztJQWhCRywyQkFBTSxHQUFOO1FBQ0kscUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLHFCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQkFBVSxHQUFWO1FBQ0kscUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBakJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ007SUFIVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcUI5QjtJQUFELGlCQUFDO0NBckJELEFBcUJDLENBckJ1QyxFQUFFLENBQUMsU0FBUyxHQXFCbkQ7a0JBckJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGwgZnJvbSBcIi4vYmFsbFwiO1xuaW1wb3J0IGJhbGxNZ3IgZnJvbSBcIi4vYmFsbE1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxCYXR0bGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCYWxsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBiYWxsTWdyLmluaXQodGhpcy5ub2RlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IGJhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJhbGwpO1xuICAgICAgICBiYWxsTWdyLmFkZEJhbGwoYmFsbC5nZXRDb21wb25lbnQoQmFsbCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmFsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGVzdFxuICAgICAqL1xuICAgIGJ1dHRvblRlc3QoKSB7XG4gICAgICAgIGJhbGxNZ3Iuc2VwYXJhdGUoKTtcbiAgICB9XG59XG4iXX0=