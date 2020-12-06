
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/apath/ppath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57d1fDGNzBPwozTscEtU+zy', 'ppath');
// scene/apath/ppath.ts

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
var pitem_1 = require("./pitem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 寻路组件
 */
var ppath = /** @class */ (function (_super) {
    __extends(ppath, _super);
    function ppath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* 起点 */
        _this.role = null;
        /* 终点 */
        _this.distination = null;
        _this.obstacle = null;
        _this.openlist = [];
        _this.closelist = [];
        _this.tempList = [];
        return _this;
    }
    ppath.prototype.onLoad = function () {
        this.startPos = this.role.getPosition();
        this.endPos = this.distination.getPosition();
    };
    ppath.prototype.start = function () {
        this.begin();
    };
    ppath.prototype.begin = function () {
        var origin = this.getPitem();
        origin.F = 0;
        origin.G = 0;
        origin.H = 0;
        origin.x = this.startPos.x;
        origin.y = this.startPos.y;
        var isFined = false;
        var center = origin;
        this.openlist.push(center);
        while (!isFined) {
            /* 找最小F值作为新center */
            this.openlist.sort(function (a, b) { return a.F - b.F; });
            center = this.openlist[0];
            /* 将center从openlist中移除 */
            this.removeCenter(center);
            this.closelist.push(center);
            for (var i = 0; i < 8; i++) {
                var item = this.getPitem();
                switch (i) {
                    case 0: /* 上 */
                        item.x = center.x;
                        item.y = center.y + center.height;
                        break;
                    case 1: /* 右上 */
                        item.x = center.x + center.width;
                        item.y = center.y + center.height;
                        break;
                    case 2: /* 右 */
                        item.x = center.x + center.width;
                        item.y = center.y;
                        break;
                    case 3: /* 右下 */
                        item.x = center.x + center.width;
                        item.y = center.y - center.height;
                        break;
                    case 4: /* 下 */
                        item.x = center.x;
                        item.y = center.y - center.height;
                        break;
                    case 5: /* 左下 */
                        item.x = center.x - center.width;
                        item.y = center.y - center.height;
                        break;
                    case 6: /* 左 */
                        item.x = center.x - center.width;
                        item.y = center.y;
                        break;
                    case 7: /* 左上 */
                        item.x = center.x - center.width;
                        item.y = center.y + center.height;
                        break;
                }
                /* 是否在障碍物上 */
                if (this.isObstacle(item)) {
                    continue;
                }
                /* 是否在选中列表 */
                if (this.isInCloseList(item)) {
                    continue;
                }
                /* 是否已经包含在了openlist中 */
                var itemIn = this.isInOpenList(item);
                if (!itemIn) {
                    item.parent = center;
                    item.G = center.G + item.value_h;
                    if (item.x != center.x && item.y != center.y) {
                        item.G = center.G + item.value_v;
                    }
                    item.F = this.getF(item);
                    this.openlist.push(item);
                    /* 检查是否已经到终点 */
                    var p1 = cc.v2(item.x, item.y);
                    var p2 = cc.v2(this.distination.x, this.distination.y);
                    if (p1.sub(p2).mag() < item.width) {
                        isFined = true;
                        this.closelist.push(item);
                        console.log("finish");
                        var pathArr = [];
                        /* 最终路径 */
                        this.getPath(item, pathArr);
                        break;
                    }
                }
                else {
                    item = itemIn;
                    /* 比较G值，取最小的 */
                    /* 基于当前center的G值 */
                    var currentG = center.G + item.value_h;
                    if (item.x != center.x && item.y != center.y) {
                        currentG = center.G + item.value_v;
                    }
                    /* 如果基于当前center的G值更小，则以当前center为parent */
                    if (currentG < item.G) {
                        item.parent = center;
                        item.G = currentG;
                        item.F = this.getF(item);
                    }
                }
            }
        }
    };
    /**
     * 获取最终路径
     * @param item
     * @param pathArr
     */
    ppath.prototype.getPath = function (item, pathArr) {
        pathArr.push(item);
        if (item.parent) {
            this.getPath(item.parent, pathArr);
        }
    };
    /**
     * 是否在障碍物上
     * @param item
     */
    ppath.prototype.isObstacle = function (item) {
        var list = this.obstacle.children;
        for (var i = 0; i < list.length; i++) {
            if (item.x >= list[i].x && item.y >= list[i].y && item.x < list[i].x + list[i].width && item.y < list[i].y + list[i].height) {
                return true;
            }
        }
        return false;
    };
    /**
     * 将当前center从openlist中移除
     * @param center
     */
    ppath.prototype.removeCenter = function (center) {
        for (var i = 0; i < this.openlist.length; i++) {
            if (this.openlist[i].x == center.x && this.openlist[i].y == center.y) {
                this.openlist.splice(i, 1);
                break;
            }
        }
    };
    /**
     * 计算F值
     * @param item
     */
    ppath.prototype.getF = function (item) {
        var h = Math.abs(this.distination.x - item.x) * item.value_h;
        var v = Math.abs(this.distination.y - item.y) * item.value_h;
        var H = h + v;
        var F = H + item.G;
        return F;
    };
    /**
     * 检查center周围的方格是否在openlist中
     * @param item
     */
    ppath.prototype.isInOpenList = function (item) {
        var obj = this.openlist.find(function (o) {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        });
        return obj ? obj : false;
    };
    /**
     * 检查center周围的方格是否在closelist中
     * @param item
     */
    ppath.prototype.isInCloseList = function (item) {
        var obj = this.closelist.find(function (o) {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        });
        return obj ? true : false;
    };
    /**
     * 创建一个方格子
     */
    ppath.prototype.getPitem = function () {
        var item = new pitem_1.default();
        return item;
    };
    __decorate([
        property(cc.Node)
    ], ppath.prototype, "role", void 0);
    __decorate([
        property(cc.Node)
    ], ppath.prototype, "distination", void 0);
    __decorate([
        property(cc.Node)
    ], ppath.prototype, "obstacle", void 0);
    ppath = __decorate([
        ccclass
    ], ppath);
    return ppath;
}(cc.Component));
exports.default = ppath;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9hcGF0aC9wcGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7O0dBRUc7QUFFSDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXlOQztRQXZORyxRQUFRO1FBRVIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixRQUFRO1FBRVIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUlqQixjQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxFQUFFLENBQUM7UUFFeEIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUF1TXJDLENBQUM7SUFyTUcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELHFCQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFR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U0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFVLElBQUksZUFBSyxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXBORDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNHO0lBSXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTztJQVhSLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F5TnpCO0lBQUQsWUFBQztDQXpORCxBQXlOQyxDQXpOa0MsRUFBRSxDQUFDLFNBQVMsR0F5TjlDO2tCQXpOb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwaXRlbSBmcm9tIFwiLi9waXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiDlr7vot6/nu4Tku7ZcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBwYXRoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qIOi1t+eCuSAqL1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJvbGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLyog57uI54K5ICovXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGlzdGluYXRpb246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb2JzdGFjbGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdGFydFBvczogY2MuVmVjMjtcbiAgICBwcml2YXRlIGVuZFBvczogY2MuVmVjMjtcbiAgICBwcml2YXRlIG9wZW5saXN0OiBwaXRlbVtdID0gW107XG4gICAgcHJpdmF0ZSBjbG9zZWxpc3Q6IHBpdGVtW10gPSBbXTtcblxuICAgIHByaXZhdGUgdGVtcExpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5yb2xlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5kUG9zID0gdGhpcy5kaXN0aW5hdGlvbi5nZXRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJlZ2luKCk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgICAgICBsZXQgb3JpZ2luOiBwaXRlbSA9IHRoaXMuZ2V0UGl0ZW0oKTtcbiAgICAgICAgb3JpZ2luLkYgPSAwO1xuICAgICAgICBvcmlnaW4uRyA9IDA7XG4gICAgICAgIG9yaWdpbi5IID0gMDtcbiAgICAgICAgb3JpZ2luLnggPSB0aGlzLnN0YXJ0UG9zLng7XG4gICAgICAgIG9yaWdpbi55ID0gdGhpcy5zdGFydFBvcy55O1xuICAgICAgICBsZXQgaXNGaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY2VudGVyOiBwaXRlbSA9IG9yaWdpbjtcbiAgICAgICAgdGhpcy5vcGVubGlzdC5wdXNoKGNlbnRlcik7XG4gICAgICAgIHdoaWxlICghaXNGaW5lZCkge1xuICAgICAgICAgICAgLyog5om+5pyA5bCPRuWAvOS9nOS4uuaWsGNlbnRlciAqL1xuICAgICAgICAgICAgdGhpcy5vcGVubGlzdC5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhLkYgLSBiLkYgfSk7XG4gICAgICAgICAgICBjZW50ZXIgPSB0aGlzLm9wZW5saXN0WzBdO1xuICAgICAgICAgICAgLyog5bCGY2VudGVy5LuOb3Blbmxpc3TkuK3np7vpmaQgKi9cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2VudGVyKGNlbnRlcik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlbGlzdC5wdXNoKGNlbnRlcik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBwaXRlbSA9IHRoaXMuZ2V0UGl0ZW0oKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOi8qIOS4iiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gY2VudGVyLng7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBjZW50ZXIueSArIGNlbnRlci5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOi8qIOWPs+S4iiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gY2VudGVyLnggKyBjZW50ZXIud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBjZW50ZXIueSArIGNlbnRlci5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOi8qIOWPsyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gY2VudGVyLnggKyBjZW50ZXIud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBjZW50ZXIueTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Lyog5Y+z5LiLICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueCArIGNlbnRlci53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55IC0gY2VudGVyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Lyog5LiLICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55IC0gY2VudGVyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6Lyog5bem5LiLICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueCAtIGNlbnRlci53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55IC0gY2VudGVyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6Lyog5bemICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueCAtIGNlbnRlci53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzovKiDlt6bkuIogKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGNlbnRlci54IC0gY2VudGVyLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyLnkgKyBjZW50ZXIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIOaYr+WQpuWcqOmanOeijeeJqeS4iiAqL1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT2JzdGFjbGUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIOaYr+WQpuWcqOmAieS4reWIl+ihqCAqL1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5DbG9zZUxpc3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIOaYr+WQpuW3sue7j+WMheWQq+WcqOS6hm9wZW5saXN05LitICovXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1JbiA9IHRoaXMuaXNJbk9wZW5MaXN0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbUluKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLkcgPSBjZW50ZXIuRyArIGl0ZW0udmFsdWVfaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ueCAhPSBjZW50ZXIueCAmJiBpdGVtLnkgIT0gY2VudGVyLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uRyA9IGNlbnRlci5HICsgaXRlbS52YWx1ZV92O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uRiA9IHRoaXMuZ2V0RihpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVubGlzdC5wdXNoKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qIOajgOafpeaYr+WQpuW3sue7j+WIsOe7iOeCuSAqL1xuICAgICAgICAgICAgICAgICAgICBsZXQgcDEgPSBjYy52MihpdGVtLngsIGl0ZW0ueSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwMiA9IGNjLnYyKHRoaXMuZGlzdGluYXRpb24ueCwgdGhpcy5kaXN0aW5hdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAxLnN1YihwMikubWFnKCkgPCBpdGVtLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoQXJyOiBwaXRlbVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiDmnIDnu4jot6/lvoQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGF0aChpdGVtLCBwYXRoQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbUluO1xuICAgICAgICAgICAgICAgICAgICAvKiDmr5TovoNH5YC877yM5Y+W5pyA5bCP55qEICovXG4gICAgICAgICAgICAgICAgICAgIC8qIOWfuuS6juW9k+WJjWNlbnRlcueahEflgLwgKi9cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRHID0gY2VudGVyLkcgKyBpdGVtLnZhbHVlX2g7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnggIT0gY2VudGVyLnggJiYgaXRlbS55ICE9IGNlbnRlci55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RyA9IGNlbnRlci5HICsgaXRlbS52YWx1ZV92O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIOWmguaenOWfuuS6juW9k+WJjWNlbnRlcueahEflgLzmm7TlsI/vvIzliJnku6XlvZPliY1jZW50ZXLkuLpwYXJlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRHIDwgaXRlbS5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uRyA9IGN1cnJlbnRHO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5GID0gdGhpcy5nZXRGKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmnIDnu4jot6/lvoRcbiAgICAgKiBAcGFyYW0gaXRlbSBcbiAgICAgKiBAcGFyYW0gcGF0aEFyciBcbiAgICAgKi9cbiAgICBnZXRQYXRoKGl0ZW06IHBpdGVtLCBwYXRoQXJyOiBwaXRlbVtdKSB7XG4gICAgICAgIHBhdGhBcnIucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhdGgoaXRlbS5wYXJlbnQsIHBhdGhBcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5piv5ZCm5Zyo6Zqc56KN54mp5LiKXG4gICAgICogQHBhcmFtIGl0ZW0gXG4gICAgICovXG4gICAgaXNPYnN0YWNsZShpdGVtOiBwaXRlbSkge1xuICAgICAgICBsZXQgbGlzdDogY2MuTm9kZVtdID0gdGhpcy5vYnN0YWNsZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS54ID49IGxpc3RbaV0ueCAmJiBpdGVtLnkgPj0gbGlzdFtpXS55ICYmIGl0ZW0ueCA8IGxpc3RbaV0ueCArIGxpc3RbaV0ud2lkdGggJiYgaXRlbS55IDwgbGlzdFtpXS55ICsgbGlzdFtpXS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5b2T5YmNY2VudGVy5LuOb3Blbmxpc3TkuK3np7vpmaRcbiAgICAgKiBAcGFyYW0gY2VudGVyIFxuICAgICAqL1xuICAgIHJlbW92ZUNlbnRlcihjZW50ZXI6IHBpdGVtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcGVubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3Blbmxpc3RbaV0ueCA9PSBjZW50ZXIueCAmJiB0aGlzLm9wZW5saXN0W2ldLnkgPT0gY2VudGVyLnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5saXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuoeeul0blgLxcbiAgICAgKiBAcGFyYW0gaXRlbSBcbiAgICAgKi9cbiAgICBnZXRGKGl0ZW06IHBpdGVtKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGg6IG51bWJlciA9IE1hdGguYWJzKHRoaXMuZGlzdGluYXRpb24ueCAtIGl0ZW0ueCkgKiBpdGVtLnZhbHVlX2g7XG4gICAgICAgIGxldCB2OiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLmRpc3RpbmF0aW9uLnkgLSBpdGVtLnkpICogaXRlbS52YWx1ZV9oO1xuICAgICAgICBsZXQgSCA9IGggKyB2O1xuICAgICAgICBsZXQgRiA9IEggKyBpdGVtLkc7XG4gICAgICAgIHJldHVybiBGO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOafpWNlbnRlcuWRqOWbtOeahOaWueagvOaYr+WQpuWcqG9wZW5saXN05LitXG4gICAgICogQHBhcmFtIGl0ZW0gXG4gICAgICovXG4gICAgaXNJbk9wZW5MaXN0KGl0ZW06IHBpdGVtKTogYW55IHtcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMub3Blbmxpc3QuZmluZCgobykgPT4ge1xuICAgICAgICAgICAgaWYgKG8ueCA9PSBpdGVtLnggJiYgby55ID09IGl0ZW0ueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2JqID8gb2JqIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qOA5p+lY2VudGVy5ZGo5Zu055qE5pa55qC85piv5ZCm5ZyoY2xvc2VsaXN05LitXG4gICAgICogQHBhcmFtIGl0ZW0gXG4gICAgICovXG4gICAgaXNJbkNsb3NlTGlzdChpdGVtOiBwaXRlbSkge1xuICAgICAgICBsZXQgb2JqID0gdGhpcy5jbG9zZWxpc3QuZmluZCgobykgPT4ge1xuICAgICAgICAgICAgaWYgKG8ueCA9PSBpdGVtLnggJiYgby55ID09IGl0ZW0ueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2JqID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuS4gOS4quaWueagvOWtkFxuICAgICAqL1xuICAgIGdldFBpdGVtKCk6IHBpdGVtIHtcbiAgICAgICAgbGV0IGl0ZW06IHBpdGVtID0gbmV3IHBpdGVtKCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbn1cbiJdfQ==