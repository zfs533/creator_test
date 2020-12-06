"use strict";
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