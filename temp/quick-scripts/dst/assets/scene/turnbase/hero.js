
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f841F3dIJKA5FCLtebmpjA', 'hero');
// scene/turnbase/hero.ts

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
var playerbase_1 = require("./playerbase");
var turnmanager_1 = require("./turnmanager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.play = function (callbk) {
        var pos = turnmanager_1.default.Inst.getplayerPos(turnmanager_1.PlayerType.enemy, this.data.index);
        this.gotoPlay(new cc.Vec2(pos.x, pos.y), 90, callbk);
    };
    Hero = __decorate([
        ccclass
    ], Hero);
    return Hero;
}(playerbase_1.default));
exports.default = Hero;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0Qyw2Q0FBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVU7SUFBNUM7O0lBS0EsQ0FBQztJQUpVLG1CQUFJLEdBQVgsVUFBWSxNQUFnQjtRQUN4QixJQUFJLEdBQUcsR0FBUSxxQkFBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUpnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBS3hCO0lBQUQsV0FBQztDQUxELEFBS0MsQ0FMaUMsb0JBQVUsR0FLM0M7a0JBTG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheWVyYmFzZSBmcm9tIFwiLi9wbGF5ZXJiYXNlXCI7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgdHVybm1hbmFnZXIsIHsgUGxheWVyVHlwZSwgUE9TIH0gZnJvbSBcIi4vdHVybm1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBwbGF5ZXJiYXNlIHtcbiAgICBwdWJsaWMgcGxheShjYWxsYms6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBwb3M6IFBPUyA9IHR1cm5tYW5hZ2VyLkluc3QuZ2V0cGxheWVyUG9zKFBsYXllclR5cGUuZW5lbXksIHRoaXMuZGF0YS5pbmRleCk7XG4gICAgICAgIHRoaXMuZ290b1BsYXkobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgOTAsIGNhbGxiayk7XG4gICAgfVxufVxuIl19