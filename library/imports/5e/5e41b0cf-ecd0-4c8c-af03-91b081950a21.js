"use strict";
cc._RF.push(module, '5e41bDP7NBMjK8DkbCBlQoh', 'pdraw');
// scene/apath/pdraw.ts

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
var pdraw = /** @class */ (function (_super) {
    __extends(pdraw, _super);
    function pdraw() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wid = 50;
        return _this;
    }
    pdraw.prototype.start = function () {
        this.graphicsLine();
    };
    /**
     * 画一个背景网格
     */
    pdraw.prototype.graphicsLine = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        var hor = Math.floor(width / this.wid) + 5;
        var ver = Math.floor(height / this.wid) + 5;
        for (var i = 0; i < ver; i++) {
            var line = new cc.Node();
            this.node.addChild(line);
            line.addComponent(cc.Graphics);
            var graphics = line.getComponent(cc.Graphics);
            graphics.strokeColor = cc.color(255, 255, 0, 255);
            graphics.lineWidth = 2;
            graphics.moveTo(0, this.wid * i);
            graphics.lineTo(width, this.wid * i);
            graphics.stroke();
            line.zIndex = -1;
        }
        for (var i = 0; i < hor; i++) {
            var line = new cc.Node();
            this.node.addChild(line);
            line.addComponent(cc.Graphics);
            var graphics = line.getComponent(cc.Graphics);
            graphics.strokeColor = cc.color(255, 255, 0, 255);
            graphics.lineWidth = 2;
            graphics.moveTo(this.wid * i, 0);
            graphics.lineTo(this.wid * i, height);
            graphics.stroke();
            line.zIndex = -1;
        }
    };
    pdraw = __decorate([
        ccclass
    ], pdraw);
    return pdraw;
}(cc.Component));
exports.default = pdraw;

cc._RF.pop();