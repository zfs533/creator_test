
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/scrollview/scrollview_v.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4435dcP1CdJ364Ze2Y7P8CL', 'scrollview_v');
// scene/scrollview/scrollview_v.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollView_v = /** @class */ (function (_super) {
    __extends(ScrollView_v, _super);
    function ScrollView_v() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item_v = undefined;
        _this.content_ver = undefined;
        _this.scrollview_ver = undefined;
        _this.viewHeight = 0;
        _this.contentOringinY = 0;
        _this.count = 0;
        _this.childNum_ver = 12;
        _this.itemArr_ver = [];
        _this.posArr_ver = [];
        _this.length_ver = 100;
        return _this;
    }
    ScrollView_v.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        this.setData_ver();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrollView_v.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.item_v.active = false;
                                    this.viewHeight = this.content_ver.height;
                                    this.contentOringinY = Math.floor(this.content_ver.y);
                                    this.scrollview_ver.node.on("scrolling", this.handleScroling_ver, this);
                                    return [4 /*yield*/, this.initList_ver()];
                                case 1:
                                    _a.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ScrollView_v.prototype.initList_ver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var height, i, item, v2;
                        return __generator(this, function (_a) {
                            if (this.content_ver.childrenCount < 1) {
                                height = 0;
                                for (i = 0; i < this.childNum_ver; i++) {
                                    item = cc.instantiate(this.item_v);
                                    item.active = true;
                                    item.getChildByName("lb").getComponent(cc.Label).string = i + "";
                                    height += item.height;
                                    v2 = new cc.Vec2(0, -item.height / 2 - item.height * i);
                                    item.setPosition(v2);
                                    this.content_ver.addChild(item);
                                    this.itemArr_ver.push(item);
                                    this.resetContentSize_ver(height);
                                }
                            }
                            resolve();
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ScrollView_v.prototype.resetContentSize_ver = function (height) {
        if (height > this.viewHeight) {
            this.content_ver.setContentSize(this.content_ver.width, height);
        }
    };
    ScrollView_v.prototype.setData_ver = function () {
        var _this = this;
        var height = 0;
        var len = this.length_ver > 20 ? 20 : this.length_ver;
        for (var i = 0; i < len; i++) {
            height += this.item_v.height;
            var v2 = new cc.Vec2(0, -this.item_v.height / 2 - this.item_v.height * i);
            this.posArr_ver.push(v2);
        }
        this.resetContentSize_ver(height);
        this.scheduleOnce(function () {
            for (var i = len; i < _this.length_ver; i++) {
                height += _this.item_v.height;
                var v2 = new cc.Vec2(0, -_this.item_v.height / 2 - _this.item_v.height * i);
                _this.posArr_ver.push(v2);
            }
            _this.resetContentSize_ver(height);
        }, 1);
    };
    ScrollView_v.prototype.handleScroling_ver = function () {
        if (this.itemArr_ver.length * this.item_v.height < this.viewHeight) {
            return;
        }
        var contentY = Math.floor(this.content_ver.y);
        var distance = contentY - this.contentOringinY;
        var count = Math.floor(distance / this.item_v.height);
        if (count < 0 || count + this.itemArr_ver.length > this.posArr_ver.length || count == this.count) {
            return;
        }
        this.count = count;
        for (var i = count; i < count + this.itemArr_ver.length; i++) {
            var item = this.itemArr_ver[i - count];
            item.getChildByName("lb").getComponent(cc.Label).string = i + "";
            item.y = this.posArr_ver[i].y;
        }
    };
    __decorate([
        property(cc.Node)
    ], ScrollView_v.prototype, "item_v", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollView_v.prototype, "content_ver", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollView_v.prototype, "scrollview_ver", void 0);
    __decorate([
        property()
    ], ScrollView_v.prototype, "length_ver", void 0);
    ScrollView_v = __decorate([
        ccclass
    ], ScrollView_v);
    return ScrollView_v;
}(cc.Component));
exports.default = ScrollView_v;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9zY3JvbGx2aWV3L3Njcm9sbHZpZXdfdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW1HQztRQWhHRyxZQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGlCQUFXLEdBQVksU0FBUyxDQUFDO1FBR2pDLG9CQUFjLEdBQWtCLFNBQVMsQ0FBQztRQUdsQyxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBRzNCLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQStFckMsQ0FBQztJQTlFUyw0QkFBSyxHQUFYOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQWpCLFNBQWlCLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7S0FFdEI7SUFFSywyQkFBSSxHQUFWOzs7O2dCQUNJLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7OztvQ0FDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29DQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO29DQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFD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LENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDakUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUEvRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0RBQ2tCO0lBVzFDO1FBREMsUUFBUSxFQUFFO29EQUNzQjtJQXBCaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1HaEM7SUFBRCxtQkFBQztDQW5HRCxBQW1HQyxDQW5HeUMsRUFBRSxDQUFDLFNBQVMsR0FtR3JEO2tCQW5Hb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFZpZXdfdiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtX3Y6IGNjLk5vZGUgPSB1bmRlZmluZWQ7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50X3ZlcjogY2MuTm9kZSA9IHVuZGVmaW5lZDtcblxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjcm9sbHZpZXdfdmVyOiBjYy5TY3JvbGxWaWV3ID0gdW5kZWZpbmVkO1xuXG5cbiAgICBwcml2YXRlIHZpZXdIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb250ZW50T3Jpbmdpblk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNoaWxkTnVtX3ZlcjogbnVtYmVyID0gMTI7XG4gICAgcHJpdmF0ZSBpdGVtQXJyX3ZlcjogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBwb3NBcnJfdmVyOiBjYy5WZWMyW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHJpdmF0ZSBsZW5ndGhfdmVyOiBudW1iZXIgPSAxMDA7XG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnNldERhdGFfdmVyKCk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1fdi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmlld0hlaWdodCA9IHRoaXMuY29udGVudF92ZXIuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jb250ZW50T3JpbmdpblkgPSBNYXRoLmZsb29yKHRoaXMuY29udGVudF92ZXIueSk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbHZpZXdfdmVyLm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5oYW5kbGVTY3JvbGluZ192ZXIsIHRoaXMpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0TGlzdF92ZXIoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdExpc3RfdmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50X3Zlci5jaGlsZHJlbkNvdW50IDwgMSkge1xuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZE51bV92ZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV92KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICs9IGl0ZW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMigwLCAtaXRlbS5oZWlnaHQgLyAyIC0gaXRlbS5oZWlnaHQgKiBpKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbih2Mik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudF92ZXIuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUFycl92ZXIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldENvbnRlbnRTaXplX3ZlcihoZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldENvbnRlbnRTaXplX3ZlcihoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoaGVpZ2h0ID4gdGhpcy52aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRfdmVyLnNldENvbnRlbnRTaXplKHRoaXMuY29udGVudF92ZXIud2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhX3ZlcigpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMubGVuZ3RoX3ZlciA+IDIwID8gMjAgOiB0aGlzLmxlbmd0aF92ZXI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGhlaWdodCArPSB0aGlzLml0ZW1fdi5oZWlnaHQ7XG4gICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMigwLCAtdGhpcy5pdGVtX3YuaGVpZ2h0IC8gMiAtIHRoaXMuaXRlbV92LmhlaWdodCAqIGkpO1xuICAgICAgICAgICAgdGhpcy5wb3NBcnJfdmVyLnB1c2godjIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV92ZXIoaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA8IHRoaXMubGVuZ3RoX3ZlcjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHRoaXMuaXRlbV92LmhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMigwLCAtdGhpcy5pdGVtX3YuaGVpZ2h0IC8gMiAtIHRoaXMuaXRlbV92LmhlaWdodCAqIGkpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zQXJyX3Zlci5wdXNoKHYyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV92ZXIoaGVpZ2h0KTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xpbmdfdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJyX3Zlci5sZW5ndGggKiB0aGlzLml0ZW1fdi5oZWlnaHQgPCB0aGlzLnZpZXdIZWlnaHQpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCBjb250ZW50WSA9IE1hdGguZmxvb3IodGhpcy5jb250ZW50X3Zlci55KTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gY29udGVudFkgLSB0aGlzLmNvbnRlbnRPcmluZ2luWTtcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIHRoaXMuaXRlbV92LmhlaWdodCk7XG4gICAgICAgIGlmIChjb3VudCA8IDAgfHwgY291bnQgKyB0aGlzLml0ZW1BcnJfdmVyLmxlbmd0aCA+IHRoaXMucG9zQXJyX3Zlci5sZW5ndGggfHwgY291bnQgPT0gdGhpcy5jb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvdW50OyBpIDwgY291bnQgKyB0aGlzLml0ZW1BcnJfdmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUFycl92ZXJbaSAtIGNvdW50XTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkgKyBcIlwiO1xuICAgICAgICAgICAgaXRlbS55ID0gdGhpcy5wb3NBcnJfdmVyW2ldLnk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=