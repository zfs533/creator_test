"use strict";
cc._RF.push(module, '93526Jq6XJMQYDJDXdV+Q4Z', 'handle');
// scene/handle/handle.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.center = null;
        _this.bg = null;
        _this.role = null;
        _this.circleR = 100;
        _this.radian = 0;
        _this.speed = 3;
        _this.isMoving = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.bg.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this));
        this.bg.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this));
        this.bg.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this));
        this.bg.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd.bind(this));
    };
    NewClass.prototype.touchStart = function (event) {
        this.isMoving = true;
        var pos = this.bg.convertToNodeSpaceAR(event.getLocation());
        this.center.setPosition(pos);
    };
    NewClass.prototype.touchMove = function (event) {
        var radian = Math.atan2(this.center.y, this.center.x);
        var ang = radian * 180 / Math.PI;
        this.role.angle = ang;
        if (this.center.getPosition().subSelf(cc.v2(0, 0)).mag() >= this.circleR) {
            this.center.x = Math.cos(radian) * this.circleR;
            this.center.y = Math.sin(radian) * this.circleR;
        }
        this.center.x += event.getDelta().x;
        this.center.y += event.getDelta().y;
        this.radian = radian;
    };
    NewClass.prototype.touchEnd = function () {
        this.isMoving = false;
        this.center.x = this.center.y = 0;
    };
    NewClass.prototype.update = function () {
        if (this.isMoving) {
            this.role.x += Math.cos(this.radian) * this.speed;
            this.role.y += Math.sin(this.radian) * this.speed;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "center", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "role", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();