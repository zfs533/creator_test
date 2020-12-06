
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/apath/ppath_debug.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9hcGF0aC9wcGF0aF9kZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7O0dBRUc7QUFFSDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTBOQztRQXZORyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFJakIsY0FBUSxHQUFZLEVBQUUsQ0FBQztRQUN2QixlQUFTLEdBQVksRUFBRSxDQUFDO1FBRXhCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBME1yQyxDQUFDO0lBeE1HLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCx5QkFBUyxHQUFULFVBQVUsSUFBVztRQUNqQixJQUFJLElBQUksR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUs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UyxHQTBOOUM7a0JBMU5vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBpdGVtIGZyb20gXCIuL3BpdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4vKipcbiAqIOWvu+i3r+e7hOS7tmRlYnVnXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcGF0aCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRpc3RpbmF0aW9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG9ic3RhY2xlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhcnRQb3M6IGNjLlZlYzI7XG4gICAgcHJpdmF0ZSBlbmRQb3M6IGNjLlZlYzI7XG4gICAgcHJpdmF0ZSBvcGVubGlzdDogcGl0ZW1bXSA9IFtdO1xuICAgIHByaXZhdGUgY2xvc2VsaXN0OiBwaXRlbVtdID0gW107XG5cbiAgICBwcml2YXRlIHRlbXBMaXN0OiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IHRoaXMucm9sZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmVuZFBvcyA9IHRoaXMuZGlzdGluYXRpb24uZ2V0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iZWdpbigpO1xuICAgIH1cbiAgICBkcmF3UG9pbnQoaXRlbTogcGl0ZW0pIHtcbiAgICAgICAgbGV0IGxpbmU6IGNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGluZSk7XG4gICAgICAgIGxpbmUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDI1NSk7XG4gICAgICAgIGdyYXBoaWNzLmNpcmNsZShpdGVtLngsIGl0ZW0ueSwgMjApO1xuICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgIC8vIHRoaXMudGVtcExpc3QucHVzaChsaW5lKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIGxldCBvcmlnaW46IHBpdGVtID0gdGhpcy5nZXRQaXRlbSgpO1xuICAgICAgICBvcmlnaW4uRiA9IDA7XG4gICAgICAgIG9yaWdpbi5HID0gMDtcbiAgICAgICAgb3JpZ2luLkggPSAwO1xuICAgICAgICBvcmlnaW4ueCA9IHRoaXMuc3RhcnRQb3MueDtcbiAgICAgICAgb3JpZ2luLnkgPSB0aGlzLnN0YXJ0UG9zLnk7XG4gICAgICAgIGxldCBpc0ZpbmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBjZW50ZXI6IHBpdGVtID0gb3JpZ2luO1xuICAgICAgICB0aGlzLm9wZW5saXN0LnB1c2goY2VudGVyKTtcbiAgICAgICAgd2hpbGUgKCFpc0ZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVGVtcExpc3QoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1BvaW50KGNlbnRlcik7XG4gICAgICAgICAgICAvKiDmib7mnIDlsI9G5YC85L2c5Li65pawY2VudGVyICovXG4gICAgICAgICAgICB0aGlzLm9wZW5saXN0LnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEuRiAtIGIuRiB9KTtcbiAgICAgICAgICAgIGNlbnRlciA9IHRoaXMub3Blbmxpc3RbMF07XG4gICAgICAgICAgICAvKiDlsIZjZW50ZXLku45vcGVubGlzdOS4reenu+mZpCAqL1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDZW50ZXIoY2VudGVyKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VsaXN0LnB1c2goY2VudGVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW06IHBpdGVtID0gdGhpcy5nZXRQaXRlbSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6Lyog5LiKICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55ICsgY2VudGVyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6Lyog5Y+z5LiKICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueCArIGNlbnRlci53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55ICsgY2VudGVyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Lyog5Y+zICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBjZW50ZXIueCArIGNlbnRlci53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGNlbnRlci55O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzovKiDlj7PkuIsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGNlbnRlci54ICsgY2VudGVyLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyLnkgLSBjZW50ZXIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovKiDkuIsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGNlbnRlci54O1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyLnkgLSBjZW50ZXIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTovKiDlt6bkuIsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGNlbnRlci54IC0gY2VudGVyLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyLnkgLSBjZW50ZXIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjovKiDlt6YgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGNlbnRlci54IC0gY2VudGVyLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3Oi8qIOW3puS4iiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gY2VudGVyLnggLSBjZW50ZXIud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBjZW50ZXIueSArIGNlbnRlci5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyog5piv5ZCm5Zyo6Zqc56KN54mp5LiKICovXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPYnN0YWNsZShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyog5piv5ZCm5Zyo6YCJ5Lit5YiX6KGoICovXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJbkNsb3NlTGlzdChpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3dGVtcChpdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUluID0gdGhpcy5pc0luT3Blbkxpc3QoaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uRyA9IGNlbnRlci5HICsgaXRlbS52YWx1ZV9oO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS54ICE9IGNlbnRlci54ICYmIGl0ZW0ueSAhPSBjZW50ZXIueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5HID0gY2VudGVyLkcgKyBpdGVtLnZhbHVlX3Y7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5GID0gdGhpcy5nZXRGKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5saXN0LnB1c2goaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHAxID0gY2MudjIoaXRlbS54LCBpdGVtLnkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcDIgPSBjYy52Mih0aGlzLmRpc3RpbmF0aW9uLngsIHRoaXMuZGlzdGluYXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwMS5zdWIocDIpLm1hZygpIDwgaXRlbS53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aEFycjogcGl0ZW1bXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYXRoKGl0ZW0sIHBhdGhBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aEFyci5mb3JFYWNoKChvYmopID0+IHsgdGhpcy5kcmF3UG9pbnQob2JqKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1JbjtcbiAgICAgICAgICAgICAgICAgICAgLyog5q+U6L6DR+WAvO+8jOWPluacgOWwj+eahCAqL1xuICAgICAgICAgICAgICAgICAgICAvKiDln7rkuo7lvZPliY1jZW50ZXLnmoRH5YC8ICovXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RyA9IGNlbnRlci5HICsgaXRlbS52YWx1ZV9oO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS54ICE9IGNlbnRlci54ICYmIGl0ZW0ueSAhPSBjZW50ZXIueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEcgPSBjZW50ZXIuRyArIGl0ZW0udmFsdWVfdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiDlpoLmnpzln7rkuo7lvZPliY1jZW50ZXLnmoRH5YC85pu05bCP77yM5YiZ5Lul5b2T5YmNY2VudGVy5Li6cGFyZW50ICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RyA8IGl0ZW0uRykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLkcgPSBjdXJyZW50RztcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uRiA9IHRoaXMuZ2V0RihpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGF0aChpdGVtOiBwaXRlbSwgcGF0aEFycjogcGl0ZW1bXSkge1xuICAgICAgICBwYXRoQXJyLnB1c2goaXRlbSk7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5nZXRQYXRoKGl0ZW0ucGFyZW50LCBwYXRoQXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIOaYr+WQpuWcqOmanOeijeeJqeS4iiAqL1xuICAgIGlzT2JzdGFjbGUoaXRlbTogcGl0ZW0pIHtcbiAgICAgICAgbGV0IGxpc3Q6IGNjLk5vZGVbXSA9IHRoaXMub2JzdGFjbGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ueCA+PSBsaXN0W2ldLnggJiYgaXRlbS55ID49IGxpc3RbaV0ueSAmJiBpdGVtLnggPCBsaXN0W2ldLnggKyBsaXN0W2ldLndpZHRoICYmIGl0ZW0ueSA8IGxpc3RbaV0ueSArIGxpc3RbaV0uaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgZHJhd3RlbXAoaXRlbTogcGl0ZW0pIHtcbiAgICAgICAgbGV0IGxpbmU6IGNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGluZSk7XG4gICAgICAgIGxpbmUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMCwgMjU1KTtcbiAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKGl0ZW0ueCwgaXRlbS55LCAyMik7XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgdGhpcy50ZW1wTGlzdC5wdXNoKGxpbmUpO1xuICAgIH1cblxuICAgIGNsZWFyVGVtcExpc3QoKSB7XG4gICAgICAgIHRoaXMudGVtcExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRlbXBMaXN0LnNwbGljZSgwKTtcbiAgICB9XG5cbiAgICByZW1vdmVDZW50ZXIoY2VudGVyOiBwaXRlbSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Blbmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5saXN0W2ldLnggPT0gY2VudGVyLnggJiYgdGhpcy5vcGVubGlzdFtpXS55ID09IGNlbnRlci55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVubGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGKGl0ZW06IHBpdGVtKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGg6IG51bWJlciA9IE1hdGguYWJzKHRoaXMuZGlzdGluYXRpb24ueCAtIGl0ZW0ueCkgKiBpdGVtLnZhbHVlX2g7XG4gICAgICAgIGxldCB2OiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLmRpc3RpbmF0aW9uLnkgLSBpdGVtLnkpICogaXRlbS52YWx1ZV9oO1xuICAgICAgICBsZXQgSCA9IGggKyB2O1xuICAgICAgICBsZXQgRiA9IEggKyBpdGVtLkc7XG4gICAgICAgIHJldHVybiBGO1xuICAgIH1cblxuICAgIGlzSW5PcGVuTGlzdChpdGVtOiBwaXRlbSk6IGFueSB7XG4gICAgICAgIGxldCBvYmogPSB0aGlzLm9wZW5saXN0LmZpbmQoKG8pID0+IHtcbiAgICAgICAgICAgIGlmIChvLnggPT0gaXRlbS54ICYmIG8ueSA9PSBpdGVtLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9iaiA/IG9iaiA6IGZhbHNlO1xuICAgIH1cbiAgICBpc0luQ2xvc2VMaXN0KGl0ZW06IHBpdGVtKSB7XG4gICAgICAgIGxldCBvYmogPSB0aGlzLmNsb3NlbGlzdC5maW5kKChvKSA9PiB7XG4gICAgICAgICAgICBpZiAoby54ID09IGl0ZW0ueCAmJiBvLnkgPT0gaXRlbS55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmogPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UGl0ZW0oKTogcGl0ZW0ge1xuICAgICAgICBsZXQgaXRlbTogcGl0ZW0gPSBuZXcgcGl0ZW0oKTtcbiAgICAgICAgLy8gaXRlbS5HID0gaXRlbS5GID0gaXRlbS5IID0gMDtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxufVxuIl19