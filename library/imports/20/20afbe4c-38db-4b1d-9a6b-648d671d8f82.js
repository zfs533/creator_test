"use strict";
cc._RF.push(module, '20afb5MONtLHZprZI1nHY+C', 'ppath_debug');
// scene/apath/ppath_debug.ts

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
 * 寻路组件debug
 */
var ppath = /** @class */ (function (_super) {
    __extends(ppath, _super);
    function ppath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.role = null;
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
    ppath.prototype.drawPoint = function (item) {
        var line = new cc.Node();
        this.node.addChild(line);
        line.addComponent(cc.Graphics);
        var graphics = line.getComponent(cc.Graphics);
        graphics.fillColor = cc.color(255, 0, 0, 255);
        graphics.circle(item.x, item.y, 20);
        graphics.fill();
        // this.tempList.push(line);
    };
    ppath.prototype.begin = function () {
        var _this = this;
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
            this.clearTempList();
            // this.drawPoint(center);
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
                this.drawtemp(item);
                var itemIn = this.isInOpenList(item);
                if (!itemIn) {
                    item.parent = center;
                    item.G = center.G + item.value_h;
                    if (item.x != center.x && item.y != center.y) {
                        item.G = center.G + item.value_v;
                    }
                    item.F = this.getF(item);
                    this.openlist.push(item);
                    var p1 = cc.v2(item.x, item.y);
                    var p2 = cc.v2(this.distination.x, this.distination.y);
                    if (p1.sub(p2).mag() < item.width) {
                        isFined = true;
                        this.closelist.push(item);
                        console.log("finish");
                        var pathArr = [];
                        this.getPath(item, pathArr);
                        pathArr.forEach(function (obj) { _this.drawPoint(obj); });
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
    ppath.prototype.getPath = function (item, pathArr) {
        pathArr.push(item);
        if (item.parent) {
            this.getPath(item.parent, pathArr);
        }
    };
    /* 是否在障碍物上 */
    ppath.prototype.isObstacle = function (item) {
        var list = this.obstacle.children;
        for (var i = 0; i < list.length; i++) {
            if (item.x >= list[i].x && item.y >= list[i].y && item.x < list[i].x + list[i].width && item.y < list[i].y + list[i].height) {
                return true;
            }
        }
        return false;
    };
    ppath.prototype.drawtemp = function (item) {
        var line = new cc.Node();
        this.node.addChild(line);
        line.addComponent(cc.Graphics);
        var graphics = line.getComponent(cc.Graphics);
        graphics.fillColor = cc.color(255, 255, 0, 255);
        graphics.circle(item.x, item.y, 22);
        graphics.fill();
        this.tempList.push(line);
    };
    ppath.prototype.clearTempList = function () {
        this.tempList.forEach(function (item) {
            item.destroy();
        });
        this.tempList.splice(0);
    };
    ppath.prototype.removeCenter = function (center) {
        for (var i = 0; i < this.openlist.length; i++) {
            if (this.openlist[i].x == center.x && this.openlist[i].y == center.y) {
                this.openlist.splice(i, 1);
                break;
            }
        }
    };
    ppath.prototype.getF = function (item) {
        var h = Math.abs(this.distination.x - item.x) * item.value_h;
        var v = Math.abs(this.distination.y - item.y) * item.value_h;
        var H = h + v;
        var F = H + item.G;
        return F;
    };
    ppath.prototype.isInOpenList = function (item) {
        var obj = this.openlist.find(function (o) {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        });
        return obj ? obj : false;
    };
    ppath.prototype.isInCloseList = function (item) {
        var obj = this.closelist.find(function (o) {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        });
        return obj ? true : false;
    };
    ppath.prototype.getPitem = function () {
        var item = new pitem_1.default();
        // item.G = item.F = item.H = 0;
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