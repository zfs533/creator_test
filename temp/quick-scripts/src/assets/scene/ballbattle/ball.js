"use strict";
cc._RF.push(module, 'c038da2vxVFGZpOgAGhm7Rg', 'ball');
// scene/ballbattle/ball.ts

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
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = undefined;
        _this.time = 0.4;
        return _this;
    }
    Ball.prototype.onLoad = function () {
        var rotate = cc.rotateBy(5, 720);
        cc.tween(this.bg).then(rotate.repeatForever()).start();
    };
    Ball.prototype.getPosition = function () {
        return this.node.getPosition();
    };
    Ball.prototype.setPosition = function (pos) {
        this.node.setPosition(pos);
    };
    /**
     * 获取bg的scale
     */
    Ball.prototype.getBgScale = function () {
        return this.bg.scale;
    };
    /**
     * 设置bg的scale
     * @param scale
     */
    Ball.prototype.setBgScale = function (scale) {
        this.bg.scale = scale;
    };
    /**
     * 一分为二
     */
    Ball.prototype.separate = function () {
        var scaleTo = cc.scaleTo(this.time, this.bg.scale / 2, this.bg.scale / 2);
        cc.tween(this.bg).then(scaleTo).start();
    };
    /**
     * 分裂时，朝着指定方向移动一段位移
     */
    Ball.prototype.separateMove = function (momBall) {
        var xx = momBall.getPosition().x + momBall.getBgScale() * 201 * Math.cos(Math.random() * 360);
        var yy = momBall.getPosition().y + momBall.getBgScale() * 201 * Math.cos(Math.random() * 360);
        var moveTo = cc.moveTo(this.time, xx, yy);
        var scale = momBall.getBgScale();
        var scaleto = cc.scaleTo(this.time, scale / 2, scale / 2);
        cc.tween(this.node).then(moveTo.easing(cc.easeIn(this.time))).start();
    };
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "bg", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

cc._RF.pop();