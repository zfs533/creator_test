
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/playerbase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS9wbGF5ZXJiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBaUNDO1FBL0JHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFDakIsVUFBSSxHQUFTLElBQUksQ0FBQzs7SUE4QjdCLENBQUM7SUF6QkcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEVBQVE7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsR0FBWSxFQUFFLE1BQWMsRUFBRSxNQUFnQjtRQUF2RCxpQkFZQztRQVhHLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNLO0lBRlAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlDOUI7SUFBRCxpQkFBQztDQWpDRCxBQWlDQyxDQWpDdUMsRUFBRSxDQUFDLFNBQVMsR0FpQ25EO2tCQWpDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllcmJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwdWJsaWMgZGF0YTogdXNlciA9IG51bGw7XG5cbiAgICAvKiDljp/lp4vlnZDmoIcgKi9cbiAgICBwcm90ZWN0ZWQgb3JpZ2lueFBvczogY2MuVmVjMjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5vcmlnaW54UG9zID0gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICB9XG5cbiAgICBzZXRCYXNlSW5mbyhkdDogdXNlcikge1xuICAgICAgICB0aGlzLmRhdGEgPSBkdDtcbiAgICAgICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gZHQubmFtZTtcbiAgICB9XG5cbiAgICBnb3RvUGxheShwb3M6IGNjLlZlYzIsIHJvdGF0ZTogbnVtYmVyLCBjYWxsYms6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCB0aW1lID0gMC41O1xuICAgICAgICBsZXQgcm90YXRlVGltZSA9IDAuMjtcbiAgICAgICAgbGV0IG1vdmVUbyA9IGNjLm1vdmVUbyh0aW1lLCBwb3MpO1xuICAgICAgICBsZXQgcm90YXRlVG8gPSBjYy5yb3RhdGVUbyhyb3RhdGVUaW1lLCByb3RhdGUpO1xuICAgICAgICBsZXQgcm90YXRlQmFjayA9IGNjLnJvdGF0ZVRvKHJvdGF0ZVRpbWUsIDApO1xuICAgICAgICBsZXQgbW92ZUJhY2sgPSBjYy5tb3ZlVG8odGltZSwgdGhpcy5vcmlnaW54UG9zKTtcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJrKHRoaXMuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShtb3ZlVG8sIHJvdGF0ZVRvLCByb3RhdGVCYWNrLCBtb3ZlQmFjaywgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcXVlbmNlKTtcbiAgICB9XG59XG4iXX0=