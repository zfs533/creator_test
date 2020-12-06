
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/handle/handle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9oYW5kbGUvaGFuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbURDO1FBaERHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRWIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUFxQ3RDLENBQUM7SUFwQ0cseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBZTtRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRXpCLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQztJQTlDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQVRKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRDVCO0lBQUQsZUFBQztDQW5ERCxBQW1EQyxDQW5EcUMsRUFBRSxDQUFDLFNBQVMsR0FtRGpEO2tCQW5Eb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjZW50ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcm9sZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNpcmNsZVI6IG51bWJlciA9IDEwMDtcbiAgICBwcml2YXRlIHJhZGlhbjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAzO1xuICAgIHByaXZhdGUgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5iZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5iZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5iZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgdGhpcy5jZW50ZXIuc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5Ub3VjaCkge1xuICAgICAgICBsZXQgcmFkaWFuID0gTWF0aC5hdGFuMih0aGlzLmNlbnRlci55LCB0aGlzLmNlbnRlci54KTtcbiAgICAgICAgbGV0IGFuZyA9IHJhZGlhbiAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIHRoaXMucm9sZS5hbmdsZSA9IGFuZztcbiAgICAgICAgaWYgKHRoaXMuY2VudGVyLmdldFBvc2l0aW9uKCkuc3ViU2VsZihjYy52MigwLCAwKSkubWFnKCkgPj0gdGhpcy5jaXJjbGVSKSB7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ID0gTWF0aC5jb3MocmFkaWFuKSAqIHRoaXMuY2lyY2xlUjtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyLnkgPSBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5jaXJjbGVSO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VudGVyLnggKz0gZXZlbnQuZ2V0RGVsdGEoKS54O1xuICAgICAgICB0aGlzLmNlbnRlci55ICs9IGV2ZW50LmdldERlbHRhKCkueTtcbiAgICAgICAgdGhpcy5yYWRpYW4gPSByYWRpYW47XG5cbiAgICB9XG4gICAgdG91Y2hFbmQoKSB7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZW50ZXIueCA9IHRoaXMuY2VudGVyLnkgPSAwO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJvbGUueCArPSBNYXRoLmNvcyh0aGlzLnJhZGlhbikgKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5yb2xlLnkgKz0gTWF0aC5zaW4odGhpcy5yYWRpYW4pICogdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19