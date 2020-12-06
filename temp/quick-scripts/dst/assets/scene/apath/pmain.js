
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/apath/pmain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9hcGF0aC9wbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWtCQztRQWZHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFcEIsU0FBRyxHQUFXLEVBQUUsQ0FBQzs7SUFVN0IsQ0FBQztJQVRHLHNCQUFNLEdBQU47UUFDSSxvREFBb0Q7UUFDcEQsNkJBQTZCO1FBQzdCLHNEQUFzRDtRQUN0RCxxQ0FBcUM7SUFDekMsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFDQSxDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBTlgsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWtCekI7SUFBRCxZQUFDO0NBbEJELEFBa0JDLENBbEJrQyxFQUFFLENBQUMsU0FBUyxHQWtCOUM7a0JBbEJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcG1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcm9sZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkaXN0aW5hdGlvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHdpZDogbnVtYmVyID0gNTA7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBsZXQgdjIgPSBuZXcgY2MuVmVjMih0aGlzLndpZCAqIDMsIHRoaXMud2lkICogNSk7XG4gICAgICAgIC8vIHRoaXMucm9sZS5zZXRQb3NpdGlvbih2Mik7XG4gICAgICAgIC8vIGxldCB2MjIgPSBuZXcgY2MuVmVjMih0aGlzLndpZCAqIDE2LCB0aGlzLndpZCAqIDUpO1xuICAgICAgICAvLyB0aGlzLmRpc3RpbmF0aW9uLnNldFBvc2l0aW9uKHYyMik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgfVxufVxuIl19