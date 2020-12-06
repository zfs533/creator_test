
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/ballbattle/ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9iYWxsYmF0dGxlL2JhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzREM7UUFuREcsUUFBRSxHQUFZLFNBQVMsQ0FBQztRQUVoQixVQUFJLEdBQVcsR0FBRyxDQUFDOztJQWlEL0IsQ0FBQztJQS9DRyxxQkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksR0FBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx5QkFBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUJBQVUsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUFRLEdBQVI7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBWSxHQUFaLFVBQWEsT0FBYTtRQUN0QixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUYsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzlGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29DQUNNO0lBSFAsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNEeEI7SUFBRCxXQUFDO0NBdERELEFBc0RDLENBdERpQyxFQUFFLENBQUMsU0FBUyxHQXNEN0M7a0JBdERvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuXG4gICAgcHJpdmF0ZSB0aW1lOiBudW1iZXIgPSAwLjQ7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCByb3RhdGUgPSBjYy5yb3RhdGVCeSg1LCA3MjApO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJnKS50aGVuKHJvdGF0ZS5yZXBlYXRGb3JldmVyKCkpLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbihwb3M6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+WYmfnmoRzY2FsZVxuICAgICAqL1xuICAgIGdldEJnU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJnLnNjYWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rmJn55qEc2NhbGVcbiAgICAgKiBAcGFyYW0gc2NhbGUgXG4gICAgICovXG4gICAgc2V0QmdTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYmcuc2NhbGUgPSBzY2FsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIDliIbkuLrkuoxcbiAgICAgKi9cbiAgICBzZXBhcmF0ZSgpIHtcbiAgICAgICAgbGV0IHNjYWxlVG8gPSBjYy5zY2FsZVRvKHRoaXMudGltZSwgdGhpcy5iZy5zY2FsZSAvIDIsIHRoaXMuYmcuc2NhbGUgLyAyKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5iZykudGhlbihzY2FsZVRvKS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIhuijguaXtu+8jOacneedgOaMh+WumuaWueWQkeenu+WKqOS4gOauteS9jeenu1xuICAgICAqL1xuICAgIHNlcGFyYXRlTW92ZShtb21CYWxsOiBCYWxsKSB7XG4gICAgICAgIGxldCB4eCA9IG1vbUJhbGwuZ2V0UG9zaXRpb24oKS54ICsgbW9tQmFsbC5nZXRCZ1NjYWxlKCkgKiAyMDEgKiBNYXRoLmNvcyhNYXRoLnJhbmRvbSgpICogMzYwKTtcbiAgICAgICAgbGV0IHl5ID0gbW9tQmFsbC5nZXRQb3NpdGlvbigpLnkgKyBtb21CYWxsLmdldEJnU2NhbGUoKSAqIDIwMSAqIE1hdGguY29zKE1hdGgucmFuZG9tKCkgKiAzNjApO1xuICAgICAgICBsZXQgbW92ZVRvID0gY2MubW92ZVRvKHRoaXMudGltZSwgeHgsIHl5KTtcbiAgICAgICAgbGV0IHNjYWxlID0gbW9tQmFsbC5nZXRCZ1NjYWxlKCk7XG4gICAgICAgIGxldCBzY2FsZXRvID0gY2Muc2NhbGVUbyh0aGlzLnRpbWUsIHNjYWxlIC8gMiwgc2NhbGUgLyAyKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKG1vdmVUby5lYXNpbmcoY2MuZWFzZUluKHRoaXMudGltZSkpKS5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==