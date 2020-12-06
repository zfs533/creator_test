"use strict";
cc._RF.push(module, '644a5OfJG9AArqZ4YsTbMQm', 'pmain');
// scene/apath/pmain.ts

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
var pmain = /** @class */ (function (_super) {
    __extends(pmain, _super);
    function pmain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.role = null;
        _this.distination = null;
        _this.wid = 50;
        return _this;
    }
    pmain.prototype.onLoad = function () {
        // let v2 = new cc.Vec2(this.wid * 3, this.wid * 5);
        // this.role.setPosition(v2);
        // let v22 = new cc.Vec2(this.wid * 16, this.wid * 5);
        // this.distination.setPosition(v22);
    };
    pmain.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], pmain.prototype, "role", void 0);
    __decorate([
        property(cc.Node)
    ], pmain.prototype, "distination", void 0);
    pmain = __decorate([
        ccclass
    ], pmain);
    return pmain;
}(cc.Component));
exports.default = pmain;

cc._RF.pop();