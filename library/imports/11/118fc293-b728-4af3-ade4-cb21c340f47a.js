"use strict";
cc._RF.push(module, '118fcKTtyhK863kyyHDQPR6', 'playerbase');
// scene/turnbase/playerbase.ts

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
var playerbase = /** @class */ (function (_super) {
    __extends(playerbase, _super);
    function playerbase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLb = null;
        _this.data = null;
        return _this;
    }
    playerbase.prototype.onLoad = function () {
        this.originxPos = new cc.Vec2(this.node.x, this.node.y);
    };
    playerbase.prototype.start = function () {
    };
    playerbase.prototype.setBaseInfo = function (dt) {
        this.data = dt;
        this.nameLb.string = dt.name;
    };
    playerbase.prototype.gotoPlay = function (pos, rotate, callbk) {
        var _this = this;
        var time = 0.5;
        var rotateTime = 0.2;
        var moveTo = cc.moveTo(time, pos);
        var rotateTo = cc.rotateTo(rotateTime, rotate);
        var rotateBack = cc.rotateTo(rotateTime, 0);
        var moveBack = cc.moveTo(time, this.originxPos);
        var callback = cc.callFunc(function () {
            callbk(_this.data);
        });
        var sequence = cc.sequence(moveTo, rotateTo, rotateBack, moveBack, callback);
        this.node.runAction(sequence);
    };
    __decorate([
        property(cc.Label)
    ], playerbase.prototype, "nameLb", void 0);
    playerbase = __decorate([
        ccclass
    ], playerbase);
    return playerbase;
}(cc.Component));
exports.default = playerbase;

cc._RF.pop();