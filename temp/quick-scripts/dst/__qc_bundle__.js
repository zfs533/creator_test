
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scene/Home/Back');
require('./assets/scene/Home/Home');
require('./assets/scene/apath/pdraw');
require('./assets/scene/apath/pitem');
require('./assets/scene/apath/pmain');
require('./assets/scene/apath/ppath');
require('./assets/scene/apath/ppath_debug');
require('./assets/scene/ballbattle/ball');
require('./assets/scene/ballbattle/ballManager');
require('./assets/scene/ballbattle/ballbattle');
require('./assets/scene/handle/handle');
require('./assets/scene/scrollview/scrollview_h');
require('./assets/scene/scrollview/scrollview_v');
require('./assets/scene/turnbase/config');
require('./assets/scene/turnbase/enemy');
require('./assets/scene/turnbase/hero');
require('./assets/scene/turnbase/playerbase');
require('./assets/scene/turnbase/turnmain');
require('./assets/scene/turnbase/turnmanager');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/scrollview/scrollview_h.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c037FDp/lGRIb6sA6UFF1z', 'scrollview_h');
// scene/scrollview/scrollview_h.ts

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
var ScrollView_h = /** @class */ (function (_super) {
    __extends(ScrollView_h, _super);
    function ScrollView_h() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item_h = undefined;
        _this.content_hor = undefined;
        _this.scrollview_hor = undefined;
        _this.viewWidth = 0;
        _this.contentOringinX = 0;
        _this.count = 0;
        _this.childNum_hor = 8;
        _this.itemArr_hor = [];
        _this.posArr_hor = [];
        _this.length_hor = 100;
        return _this;
    }
    ScrollView_h.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        this.setData_hor();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrollView_h.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.item_h.active = false;
                                    this.viewWidth = this.content_hor.width;
                                    this.contentOringinX = Math.floor(this.content_hor.x);
                                    this.scrollview_hor.node.on("scrolling", this.handleScroling_hor, this);
                                    return [4 /*yield*/, this.initList_hor()];
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
    ScrollView_h.prototype.initList_hor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var width, i, item, v2;
                        return __generator(this, function (_a) {
                            if (this.content_hor.childrenCount < 1) {
                                width = 0;
                                for (i = 0; i < this.childNum_hor; i++) {
                                    item = cc.instantiate(this.item_h);
                                    item.active = true;
                                    item.getChildByName("lb").getComponent(cc.Label).string = i + "";
                                    width += item.width;
                                    v2 = new cc.Vec2(item.width / 2 + item.width * i, 0);
                                    item.setPosition(v2);
                                    this.content_hor.addChild(item);
                                    this.itemArr_hor.push(item);
                                    this.resetContentSize_hor(width);
                                }
                            }
                            resolve();
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ScrollView_h.prototype.resetContentSize_hor = function (width) {
        if (width > this.viewWidth) {
            this.content_hor.setContentSize(width, this.content_hor.height);
        }
    };
    ScrollView_h.prototype.setData_hor = function () {
        var _this = this;
        var width = 0;
        var len = this.length_hor > 20 ? 20 : this.length_hor;
        for (var i = 0; i < len; i++) {
            width += this.item_h.width;
            var v2 = new cc.Vec2(this.item_h.width / 2 + this.item_h.width * i, 0);
            this.posArr_hor.push(v2);
        }
        this.resetContentSize_hor(width);
        this.scheduleOnce(function () {
            for (var i = len; i < _this.length_hor; i++) {
                width += _this.item_h.width;
                var v2 = new cc.Vec2(_this.item_h.width / 2 + _this.item_h.width * i, 0);
                _this.posArr_hor.push(v2);
            }
            _this.resetContentSize_hor(width);
        }, 1);
    };
    ScrollView_h.prototype.handleScroling_hor = function () {
        if (this.itemArr_hor.length * this.item_h.width < this.viewWidth) {
            return;
        }
        var contentX = Math.floor(this.content_hor.x);
        var distance = this.contentOringinX - contentX;
        var count = Math.floor(distance / this.item_h.width);
        if (count < 0 || count + this.itemArr_hor.length > this.posArr_hor.length || count == this.count) {
            return;
        }
        this.count = count;
        for (var i = count; i < count + this.itemArr_hor.length; i++) {
            var item = this.itemArr_hor[i - count];
            item.getChildByName("lb").getComponent(cc.Label).string = i + "";
            item.x = this.posArr_hor[i].x;
        }
    };
    __decorate([
        property(cc.Node)
    ], ScrollView_h.prototype, "item_h", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollView_h.prototype, "content_hor", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollView_h.prototype, "scrollview_hor", void 0);
    __decorate([
        property()
    ], ScrollView_h.prototype, "length_hor", void 0);
    ScrollView_h = __decorate([
        ccclass
    ], ScrollView_h);
    return ScrollView_h;
}(cc.Component));
exports.default = ScrollView_h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9zY3JvbGx2aWV3L3Njcm9sbHZpZXdfaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW1HQztRQWhHRyxZQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGlCQUFXLEdBQVksU0FBUyxDQUFDO1FBR2pDLG9CQUFjLEdBQWtCLFNBQVMsQ0FBQztRQUdsQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFHM0IsZ0JBQVUsR0FBVyxHQUFHLENBQUM7O0lBK0VyQyxDQUFDO0lBOUVTLDRCQUFLLEdBQVg7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBakIsU0FBaUIsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7OztLQUV0QjtJQUVLLDJCQUFJLEdBQVY7Ozs7Z0JBQ0ksc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7O29DQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0NBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0NBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQ0FDeEUscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOztvQ0FBekIsU0FBeUIsQ0FBQztvQ0FDMUIsT0FBTyxFQUFFLENBQUM7Ozs7eUJBQ2IsQ0FBQyxFQUFDOzs7S0FDTjtJQUVLLG1DQUFZLEdBQWxCOzs7O2dCQUNJLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7OzRCQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtnQ0FDaEMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQ0FDZCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0NBQ3BDLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0NBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQ0FDakUsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7b0NBQ2hCLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0NBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2lDQUNwQzs2QkFDSjs0QkFFRCxPQUFPLEVBQUUsQ0FBQzs7O3lCQUNiLENBQUMsRUFBQzs7O0tBQ047SUFFRCwyQ0FBb0IsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25FO0lBQ0wsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLEtBQUssSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDN0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQy9DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM5RixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQS9GRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3REFDa0I7SUFXMUM7UUFEQyxRQUFRLEVBQUU7b0RBQ3NCO0lBcEJoQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUdoQztJQUFELG1CQUFDO0NBbkdELEFBbUdDLENBbkd5QyxFQUFFLENBQUMsU0FBUyxHQW1HckQ7a0JBbkdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVmlld19oIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1faDogY2MuTm9kZSA9IHVuZGVmaW5lZDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRfaG9yOiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsdmlld19ob3I6IGNjLlNjcm9sbFZpZXcgPSB1bmRlZmluZWQ7XG5cblxuICAgIHByaXZhdGUgdmlld1dpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udGVudE9yaW5naW5YOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjaGlsZE51bV9ob3I6IG51bWJlciA9IDg7XG4gICAgcHJpdmF0ZSBpdGVtQXJyX2hvcjogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBwb3NBcnJfaG9yOiBjYy5WZWMyW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHJpdmF0ZSBsZW5ndGhfaG9yOiBudW1iZXIgPSAxMDA7XG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnNldERhdGFfaG9yKCk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1faC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmlld1dpZHRoID0gdGhpcy5jb250ZW50X2hvci53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGVudE9yaW5naW5YID0gTWF0aC5mbG9vcih0aGlzLmNvbnRlbnRfaG9yLngpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGx2aWV3X2hvci5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMuaGFuZGxlU2Nyb2xpbmdfaG9yLCB0aGlzKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdExpc3RfaG9yKCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRMaXN0X2hvcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudF9ob3IuY2hpbGRyZW5Db3VudCA8IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZE51bV9ob3I7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9oKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggKz0gaXRlbS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYyID0gbmV3IGNjLlZlYzIoaXRlbS53aWR0aCAvIDIgKyBpdGVtLndpZHRoICogaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24odjIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRfaG9yLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1BcnJfaG9yLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV9ob3Iod2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldENvbnRlbnRTaXplX2hvcih3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh3aWR0aCA+IHRoaXMudmlld1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRfaG9yLnNldENvbnRlbnRTaXplKHdpZHRoLCB0aGlzLmNvbnRlbnRfaG9yLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhX2hvcigpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5sZW5ndGhfaG9yID4gMjAgPyAyMCA6IHRoaXMubGVuZ3RoX2hvcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgd2lkdGggKz0gdGhpcy5pdGVtX2gud2lkdGg7XG4gICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMih0aGlzLml0ZW1faC53aWR0aCAvIDIgKyB0aGlzLml0ZW1faC53aWR0aCAqIGksIDApO1xuICAgICAgICAgICAgdGhpcy5wb3NBcnJfaG9yLnB1c2godjIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV9ob3Iod2lkdGgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVuOyBpIDwgdGhpcy5sZW5ndGhfaG9yOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSB0aGlzLml0ZW1faC53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMih0aGlzLml0ZW1faC53aWR0aCAvIDIgKyB0aGlzLml0ZW1faC53aWR0aCAqIGksIDApO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zQXJyX2hvci5wdXNoKHYyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV9ob3Iod2lkdGgpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGluZ19ob3IoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcnJfaG9yLmxlbmd0aCAqIHRoaXMuaXRlbV9oLndpZHRoIDwgdGhpcy52aWV3V2lkdGgpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCBjb250ZW50WCA9IE1hdGguZmxvb3IodGhpcy5jb250ZW50X2hvci54KTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jb250ZW50T3JpbmdpblggLSBjb250ZW50WDtcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIHRoaXMuaXRlbV9oLndpZHRoKTtcbiAgICAgICAgaWYgKGNvdW50IDwgMCB8fCBjb3VudCArIHRoaXMuaXRlbUFycl9ob3IubGVuZ3RoID4gdGhpcy5wb3NBcnJfaG9yLmxlbmd0aCB8fCBjb3VudCA9PSB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICBmb3IgKGxldCBpID0gY291bnQ7IGkgPCBjb3VudCArIHRoaXMuaXRlbUFycl9ob3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXJyX2hvcltpIC0gY291bnRdO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaSArIFwiXCI7XG4gICAgICAgICAgICBpdGVtLnggPSB0aGlzLnBvc0Fycl9ob3JbaV0ueDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/ballbattle/ballbattle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4501QiZfREjoB3z9oHZDqh', 'ballbattle');
// scene/ballbattle/ballbattle.ts

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
var ball_1 = require("./ball");
var ballManager_1 = require("./ballManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallBattle = /** @class */ (function (_super) {
    __extends(BallBattle, _super);
    function BallBattle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preBall = null;
        return _this;
    }
    BallBattle.prototype.onLoad = function () {
        ballManager_1.default.init(this.node, this);
    };
    BallBattle.prototype.start = function () {
        var ball = cc.instantiate(this.preBall);
        ballManager_1.default.addBall(ball.getComponent(ball_1.default));
        this.node.addChild(ball);
    };
    /**
     * test
     */
    BallBattle.prototype.buttonTest = function () {
        ballManager_1.default.separate();
    };
    __decorate([
        property(cc.Prefab)
    ], BallBattle.prototype, "preBall", void 0);
    BallBattle = __decorate([
        ccclass
    ], BallBattle);
    return BallBattle;
}(cc.Component));
exports.default = BallBattle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9iYWxsYmF0dGxlL2JhbGxiYXR0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLDZDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXFCQztRQWxCRyxhQUFPLEdBQWMsSUFBSSxDQUFDOztJQWtCOUIsQ0FBQztJQWhCRywyQkFBTSxHQUFOO1FBQ0kscUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLHFCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQkFBVSxHQUFWO1FBQ0kscUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBakJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ007SUFIVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcUI5QjtJQUFELGlCQUFDO0NBckJELEFBcUJDLENBckJ1QyxFQUFFLENBQUMsU0FBUyxHQXFCbkQ7a0JBckJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGwgZnJvbSBcIi4vYmFsbFwiO1xuaW1wb3J0IGJhbGxNZ3IgZnJvbSBcIi4vYmFsbE1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxCYXR0bGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCYWxsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBiYWxsTWdyLmluaXQodGhpcy5ub2RlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IGJhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJhbGwpO1xuICAgICAgICBiYWxsTWdyLmFkZEJhbGwoYmFsbC5nZXRDb21wb25lbnQoQmFsbCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmFsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGVzdFxuICAgICAqL1xuICAgIGJ1dHRvblRlc3QoKSB7XG4gICAgICAgIGJhbGxNZ3Iuc2VwYXJhdGUoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5ef9LCv6JJeLB9LkGCvAUx', 'enemy');
// scene/turnbase/enemy.ts

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
var playerbase_1 = require("./playerbase");
var turnmanager_1 = require("./turnmanager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enemy.prototype.play = function (callbk) {
        var pos = turnmanager_1.default.Inst.getplayerPos(turnmanager_1.PlayerType.hero, this.data.index);
        this.gotoPlay(new cc.Vec2(pos.x, pos.y), -90, callbk);
    };
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(playerbase_1.default));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS9lbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEMsNkNBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFVO0lBQTdDOztJQU1BLENBQUM7SUFKVSxvQkFBSSxHQUFYLFVBQVksTUFBZ0I7UUFDeEIsSUFBSSxHQUFHLEdBQVEscUJBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUxnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBTXpCO0lBQUQsWUFBQztDQU5ELEFBTUMsQ0FOa0Msb0JBQVUsR0FNNUM7a0JBTm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheWVyYmFzZSBmcm9tIFwiLi9wbGF5ZXJiYXNlXCI7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgdHVybm1hbmFnZXIsIHsgUGxheWVyVHlwZSwgUE9TIH0gZnJvbSBcIi4vdHVybm1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgcGxheWVyYmFzZSB7XG5cbiAgICBwdWJsaWMgcGxheShjYWxsYms6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBwb3M6IFBPUyA9IHR1cm5tYW5hZ2VyLkluc3QuZ2V0cGxheWVyUG9zKFBsYXllclR5cGUuaGVybywgdGhpcy5kYXRhLmluZGV4KTtcbiAgICAgICAgdGhpcy5nb3RvUGxheShuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCAtOTAsIGNhbGxiayk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/Home/Home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae3fb+gmZJLGJms790tVa3w', 'Home');
// scene/Home/Home.ts

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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.on_clicked = function (event, info) {
        switch (info) {
            case "scrollview":
                cc.director.loadScene("scrollview");
                break;
            case "astar":
                cc.director.loadScene("astar");
                break;
            case "handle":
                cc.director.loadScene("handle");
                break;
            case "turnbase":
                cc.director.loadScene("turnbase");
                break;
            case "ballbattle":
                cc.director.loadScene("ballbattle");
                break;
        }
    };
    Home = __decorate([
        ccclass
    ], Home);
    return Home;
}(cc.Component));
exports.default = Home;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9Ib21lL0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBcUJBLENBQUM7SUFuQkcseUJBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxJQUFJO1FBQ2xCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBcEJnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBcUJ4QjtJQUFELFdBQUM7Q0FyQkQsQUFxQkMsQ0FyQmlDLEVBQUUsQ0FBQyxTQUFTLEdBcUI3QztrQkFyQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbl9jbGlja2VkKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgIHN3aXRjaCAoaW5mbykge1xuICAgICAgICAgICAgY2FzZSBcInNjcm9sbHZpZXdcIjpcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY3JvbGx2aWV3XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFzdGFyXCI6XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYXN0YXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGFuZGxlXCI6XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFuZGxlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5iYXNlXCI6XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwidHVybmJhc2VcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbGJhdHRsZVwiOlxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhbGxiYXR0bGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/apath/pitem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e61daeNcbJDhqqazxEUq8Zr', 'pitem');
// scene/apath/pitem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 网格对象
 */
var pitem = /** @class */ (function () {
    function pitem() {
        this.width = 50;
        this.height = 50;
        /* 正向和斜向消耗 */
        this.value_h = 10;
        this.value_v = 14;
    }
    return pitem;
}());
exports.default = pitem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9hcGF0aC9waXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtRQUNXLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUkzQixhQUFhO1FBQ04sWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVcsRUFBRSxDQUFDO0lBS2hDLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOe9keagvOWvueixoVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwaXRlbSB7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSA1MDtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSA1MDtcbiAgICBwdWJsaWMgRjogbnVtYmVyO1xuICAgIHB1YmxpYyBHOiBudW1iZXI7XG4gICAgcHVibGljIEg6IG51bWJlcjtcbiAgICAvKiDmraPlkJHlkozmlpzlkJHmtojogJcgKi9cbiAgICBwdWJsaWMgdmFsdWVfaDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHZhbHVlX3Y6IG51bWJlciA9IDE0O1xuICAgIC8qIOWdkOaghyAqL1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgcGFyZW50OiBwaXRlbTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/ballbattle/ballManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fbb0E25hpBrLafEtuQD05d', 'ballManager');
// scene/ballbattle/ballManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = require("./ball");
var BallManager = /** @class */ (function () {
    function BallManager() {
        this.ballList = [];
    }
    BallManager.prototype.init = function (node, bbl) {
        this.ballList.splice(0);
        this.node = node;
        this.bbl = bbl;
    };
    /**
     * 添加到列表
     * @param ball
     */
    BallManager.prototype.addBall = function (ball) {
        this.ballList.push(ball);
    };
    /**
     * 分裂
     */
    BallManager.prototype.separate = function () {
        var temp = [];
        for (var i = 0; i < this.ballList.length; i++) {
            var ball = this.ballList[i];
            ball.separate();
            var newBall = cc.instantiate(this.bbl.preBall);
            newBall.getComponent(ball_1.default).setBgScale(ball.getBgScale() / 2);
            this.node.addChild(newBall);
            newBall.getComponent(ball_1.default).setPosition(ball.getPosition());
            newBall.getComponent(ball_1.default).separateMove(ball);
            temp.push(newBall.getComponent(ball_1.default));
        }
        this.ballList = this.ballList.concat(temp);
    };
    return BallManager;
}());
var ballMgr = new BallManager();
exports.default = ballMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9iYWxsYmF0dGxlL2JhbGxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBSTFCO0lBQUE7UUFHWSxhQUFRLEdBQVcsRUFBRSxDQUFDO0lBbUNsQyxDQUFDO0lBakNHLDBCQUFJLEdBQUosVUFBSyxJQUFhLEVBQUUsR0FBZTtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkJBQU8sR0FBUCxVQUFRLElBQVU7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxDQUFDO1NBRXpDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNoQyxrQkFBZSxPQUFPLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tIFwiLi9iYWxsXCI7XG5pbXBvcnQgQmFsbEJhdHRsZSBmcm9tIFwiLi9iYWxsYmF0dGxlXCI7XG5cblxuY2xhc3MgQmFsbE1hbmFnZXIge1xuICAgIHByaXZhdGUgbm9kZTogY2MuTm9kZTtcbiAgICBwcml2YXRlIGJibDogQmFsbEJhdHRsZTtcbiAgICBwcml2YXRlIGJhbGxMaXN0OiBCYWxsW10gPSBbXTtcblxuICAgIGluaXQobm9kZTogY2MuTm9kZSwgYmJsOiBCYWxsQmF0dGxlKSB7XG4gICAgICAgIHRoaXMuYmFsbExpc3Quc3BsaWNlKDApO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmJibCA9IGJibDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDliLDliJfooahcbiAgICAgKiBAcGFyYW0gYmFsbCAgXG4gICAgICovXG4gICAgYWRkQmFsbChiYWxsOiBCYWxsKSB7XG4gICAgICAgIHRoaXMuYmFsbExpc3QucHVzaChiYWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliIboo4JcbiAgICAgKi9cbiAgICBzZXBhcmF0ZSgpIHtcbiAgICAgICAgbGV0IHRlbXA6IEJhbGxbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiYWxsOiBCYWxsID0gdGhpcy5iYWxsTGlzdFtpXTtcbiAgICAgICAgICAgIGJhbGwuc2VwYXJhdGUoKTtcbiAgICAgICAgICAgIGxldCBuZXdCYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYmwucHJlQmFsbCk7XG4gICAgICAgICAgICBuZXdCYWxsLmdldENvbXBvbmVudChCYWxsKS5zZXRCZ1NjYWxlKGJhbGwuZ2V0QmdTY2FsZSgpIC8gMik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QmFsbCk7XG4gICAgICAgICAgICBuZXdCYWxsLmdldENvbXBvbmVudChCYWxsKS5zZXRQb3NpdGlvbihiYWxsLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgbmV3QmFsbC5nZXRDb21wb25lbnQoQmFsbCkuc2VwYXJhdGVNb3ZlKGJhbGwpO1xuICAgICAgICAgICAgdGVtcC5wdXNoKG5ld0JhbGwuZ2V0Q29tcG9uZW50KEJhbGwpKTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFsbExpc3QgPSB0aGlzLmJhbGxMaXN0LmNvbmNhdCh0ZW1wKTtcbiAgICB9XG5cbn1cblxubGV0IGJhbGxNZ3IgPSBuZXcgQmFsbE1hbmFnZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGJhbGxNZ3I7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/apath/pdraw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9hcGF0aC9wZHJhdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTBDQztRQXhDVyxTQUFHLEdBQVcsRUFBRSxDQUFDOztJQXdDN0IsQ0FBQztJQXZDRyxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILDRCQUFZLEdBQVo7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLElBQUksR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLElBQUksR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQ3JDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQXZDZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBDekI7SUFBRCxZQUFDO0NBMUNELEFBMENDLENBMUNrQyxFQUFFLENBQUMsU0FBUyxHQTBDOUM7a0JBMUNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZHJhdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHdpZDogbnVtYmVyID0gNTA7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3NMaW5lKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlLvkuIDkuKrog4zmma/nvZHmoLxcbiAgICAgKi9cbiAgICBncmFwaGljc0xpbmUoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcbiAgICAgICAgbGV0IGhvciA9IE1hdGguZmxvb3Iod2lkdGggLyB0aGlzLndpZCkgKyA1O1xuICAgICAgICBsZXQgdmVyID0gTWF0aC5mbG9vcihoZWlnaHQgLyB0aGlzLndpZCkgKyA1O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGluZTogY2MuTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGluZSk7XG4gICAgICAgICAgICBsaW5lLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBsaW5lLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAwLCAyNTUpO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbygwLCB0aGlzLndpZCAqIGkpO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHdpZHRoLCB0aGlzLndpZCAqIGkpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgICAgICBsaW5lLnpJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9yOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaW5lOiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsaW5lKTtcbiAgICAgICAgICAgIGxpbmUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IGxpbmUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDAsIDI1NSk7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHRoaXMud2lkICogaSwgMCk7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy53aWQgKiBpLCBoZWlnaHQpXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgICAgIGxpbmUuekluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/turnmain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1cf3mD+gtI5qbz4/Db5XIu', 'turnmain');
// scene/turnbase/turnmain.ts

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
var config_1 = require("./config");
var enemy_1 = require("./enemy");
var hero_1 = require("./hero");
var playerbase_1 = require("./playerbase");
var turnmanager_1 = require("./turnmanager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var turnmain = /** @class */ (function (_super) {
    __extends(turnmain, _super);
    function turnmain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.heroPre = null;
        _this.enemyPre = null;
        _this.familyList = [];
        _this.enemyList = [];
        return _this;
    }
    turnmain.prototype.onLoad = function () {
        config_1.default.init();
        turnmanager_1.default.Inst.init(this);
    };
    turnmain.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.layoutHero(config_1.default.family)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.layoutHero(config_1.default.enemy)];
                    case 2:
                        _a.sent();
                        this.startPlay(this.familyList[0], turnmanager_1.PlayerType.hero);
                        return [2 /*return*/];
                }
            });
        });
    };
    turnmain.prototype.layoutHero = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        for (var i = 0; i < list.length; i++) {
                            var hero = null;
                            if (list[i].type == 0) {
                                hero = cc.instantiate(_this.heroPre);
                                _this.familyList.push(hero);
                            }
                            else {
                                hero = cc.instantiate(_this.enemyPre);
                                _this.enemyList.push(hero);
                            }
                            hero.getComponent(playerbase_1.default).setBaseInfo(list[i]);
                            hero.setPosition(list[i].gridX * config_1.default.wid, list[i].gridY * config_1.default.wid);
                            _this.node.addChild(hero);
                        }
                        resolve();
                    })];
            });
        });
    };
    /**
     * 开始战斗
     * @param player
     * @param type
     */
    turnmain.prototype.startPlay = function (player, type) {
        var _this = this;
        if (type == turnmanager_1.PlayerType.hero) {
            player.getComponent(hero_1.default).play(function (data) {
                _this.startPlay(_this.enemyList[data.index], turnmanager_1.PlayerType.enemy);
            });
        }
        else {
            player.getComponent(enemy_1.default).play(function (data) {
                var idx = data.index + 1 <= 4 ? data.index + 1 : 0;
                _this.startPlay(_this.familyList[idx], turnmanager_1.PlayerType.hero);
            });
        }
    };
    __decorate([
        property(cc.Prefab)
    ], turnmain.prototype, "heroPre", void 0);
    __decorate([
        property(cc.Prefab)
    ], turnmain.prototype, "enemyPre", void 0);
    turnmain = __decorate([
        ccclass
    ], turnmain);
    return turnmain;
}(cc.Component));
exports.default = turnmain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS90dXJubWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0Q7QUFDaEQsaUNBQTRCO0FBQzVCLCtCQUEwQjtBQUMxQiwyQ0FBc0M7QUFDdEMsNkNBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkRDO1FBekRHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixlQUFTLEdBQWMsRUFBRSxDQUFDOztJQW1EdEMsQ0FBQztJQWpERyx5QkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixxQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVLLHdCQUFLLEdBQVg7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBYyxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBYyxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBM0MsU0FBMkMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLHdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ3ZEO0lBRUssNkJBQVUsR0FBaEIsVUFBaUIsSUFBWTs7OztnQkFDekIsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDbEMsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDOzRCQUN6QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNuQixJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUM5QjtpQ0FDSTtnQ0FDRCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUM3Qjs0QkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxnQkFBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLGdCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3pGLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM1Qjt3QkFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDZCxDQUFDLENBQUMsRUFBQzs7O0tBQ047SUFFRDs7OztPQUlHO0lBQ0gsNEJBQVMsR0FBVCxVQUFVLE1BQWUsRUFBRSxJQUFZO1FBQXZDLGlCQVlDO1FBWEcsSUFBSSxJQUFJLElBQUksd0JBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDekIsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFVO2dCQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLHdCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFVO2dCQUN2QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSx3QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUxWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRDVCO0lBQUQsZUFBQztDQTNERCxBQTJEQyxDQTNEcUMsRUFBRSxDQUFDLFNBQVMsR0EyRGpEO2tCQTNEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0dXJuYmFzZWNvbmZpZywgeyB1c2VyIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuL2hlcm9cIjtcbmltcG9ydCBwbGF5ZXJiYXNlIGZyb20gXCIuL3BsYXllcmJhc2VcIjtcbmltcG9ydCB0dXJubWFuYWdlciwgeyBQbGF5ZXJUeXBlIH0gZnJvbSBcIi4vdHVybm1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHR1cm5tYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGhlcm9QcmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGVuZW15UHJlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBmYW1pbHlMaXN0OiBjYy5Ob2RlW10gPSBbXTtcbiAgICBwcml2YXRlIGVuZW15TGlzdDogY2MuTm9kZVtdID0gW107XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHR1cm5iYXNlY29uZmlnLmluaXQoKTtcbiAgICAgICAgdHVybm1hbmFnZXIuSW5zdC5pbml0KHRoaXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBhd2FpdCB0aGlzLmxheW91dEhlcm8odHVybmJhc2Vjb25maWcuZmFtaWx5KTtcbiAgICAgICAgYXdhaXQgdGhpcy5sYXlvdXRIZXJvKHR1cm5iYXNlY29uZmlnLmVuZW15KTtcbiAgICAgICAgdGhpcy5zdGFydFBsYXkodGhpcy5mYW1pbHlMaXN0WzBdLCBQbGF5ZXJUeXBlLmhlcm8pO1xuICAgIH1cblxuICAgIGFzeW5jIGxheW91dEhlcm8obGlzdDogdXNlcltdKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBoZXJvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS50eXBlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaGVybyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb1ByZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFtaWx5TGlzdC5wdXNoKGhlcm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVybyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlQcmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15TGlzdC5wdXNoKGhlcm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZXJvLmdldENvbXBvbmVudChwbGF5ZXJiYXNlKS5zZXRCYXNlSW5mbyhsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICBoZXJvLnNldFBvc2l0aW9uKGxpc3RbaV0uZ3JpZFggKiB0dXJuYmFzZWNvbmZpZy53aWQsIGxpc3RbaV0uZ3JpZFkgKiB0dXJuYmFzZWNvbmZpZy53aWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChoZXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5aeL5oiY5paXXG4gICAgICogQHBhcmFtIHBsYXllciBcbiAgICAgKiBAcGFyYW0gdHlwZSBcbiAgICAgKi9cbiAgICBzdGFydFBsYXkocGxheWVyOiBjYy5Ob2RlLCB0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gUGxheWVyVHlwZS5oZXJvKSB7XG4gICAgICAgICAgICBwbGF5ZXIuZ2V0Q29tcG9uZW50KEhlcm8pLnBsYXkoKGRhdGE6IHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGxheSh0aGlzLmVuZW15TGlzdFtkYXRhLmluZGV4XSwgUGxheWVyVHlwZS5lbmVteSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllci5nZXRDb21wb25lbnQoRW5lbXkpLnBsYXkoKGRhdGE6IHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gZGF0YS5pbmRleCArIDEgPD0gNCA/IGRhdGEuaW5kZXggKyAxIDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGxheSh0aGlzLmZhbWlseUxpc3RbaWR4XSwgUGxheWVyVHlwZS5oZXJvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f841F3dIJKA5FCLtebmpjA', 'hero');
// scene/turnbase/hero.ts

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
var playerbase_1 = require("./playerbase");
var turnmanager_1 = require("./turnmanager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.play = function (callbk) {
        var pos = turnmanager_1.default.Inst.getplayerPos(turnmanager_1.PlayerType.enemy, this.data.index);
        this.gotoPlay(new cc.Vec2(pos.x, pos.y), 90, callbk);
    };
    Hero = __decorate([
        ccclass
    ], Hero);
    return Hero;
}(playerbase_1.default));
exports.default = Hero;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0Qyw2Q0FBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVU7SUFBNUM7O0lBS0EsQ0FBQztJQUpVLG1CQUFJLEdBQVgsVUFBWSxNQUFnQjtRQUN4QixJQUFJLEdBQUcsR0FBUSxxQkFBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUpnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBS3hCO0lBQUQsV0FBQztDQUxELEFBS0MsQ0FMaUMsb0JBQVUsR0FLM0M7a0JBTG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheWVyYmFzZSBmcm9tIFwiLi9wbGF5ZXJiYXNlXCI7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgdHVybm1hbmFnZXIsIHsgUGxheWVyVHlwZSwgUE9TIH0gZnJvbSBcIi4vdHVybm1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBwbGF5ZXJiYXNlIHtcbiAgICBwdWJsaWMgcGxheShjYWxsYms6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBwb3M6IFBPUyA9IHR1cm5tYW5hZ2VyLkluc3QuZ2V0cGxheWVyUG9zKFBsYXllclR5cGUuZW5lbXksIHRoaXMuZGF0YS5pbmRleCk7XG4gICAgICAgIHRoaXMuZ290b1BsYXkobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgOTAsIGNhbGxiayk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/Home/Back.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '513760dvDtGw7OWD6mOYEbX', 'Back');
// scene/Home/Back.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene("home");
        });
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9Ib21lL0JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBTUEsQ0FBQztJQUxHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FNNUI7SUFBRCxlQUFDO0NBTkQsQUFNQyxDQU5xQyxFQUFFLENBQUMsU0FBUyxHQU1qRDtrQkFOb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJob21lXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e7a9kkefhM1KvjrQwHHK7y', 'config');
// scene/turnbase/config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var turnbaseconfig = /** @class */ (function () {
    function turnbaseconfig() {
    }
    turnbaseconfig.init = function () {
        this.family.splice(0);
        this.enemy.splice(0);
        this.tempGridArr.splice(0);
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 2; j++) {
                var player = this.getUserData(j, i);
                player.name = "\u89D2\u8272 " + i;
                player.index = i;
                if (j == 0) {
                    this.family.push(player);
                }
                else {
                    this.enemy.push(player);
                }
            }
        }
    };
    turnbaseconfig.getUserData = function (type) {
        var userData = {
            index: 0,
            name: "",
            sex: 0,
            type: type,
            //位置
            gridX: 0,
            gridY: 0,
            //血量
            blood: 100 * Math.random() * 1000,
            //技能
            skill1: 0,
            skill2: 0,
            skill3: 0,
        };
        if (type == 0) {
            var pos = this.getGridXY(1, 2);
            userData.gridX = pos.x; //Math.floor(Math.random() * 8) + 1;
            userData.gridY = pos.y; //Math.floor(Math.random() * 10) + 2;
        }
        else {
            var pos = this.getGridXY(10, 2);
            userData.gridX = pos.x; //Math.floor(Math.random() * 8) + 10;
            userData.gridY = pos.y; //Math.floor(Math.random() * 10) + 2;
        }
        return userData;
    };
    turnbaseconfig.getGridXY = function (offsetX, offsetY) {
        var x = Math.floor(Math.random() * 8) + offsetX;
        var y = Math.floor(Math.random() * 10) + offsetY;
        for (var i = 0; i < this.tempGridArr.length; i++) {
            if (x == this.tempGridArr[i].x && y == this.tempGridArr[i].y) {
                this.getGridXY(offsetX, offsetY);
                break;
            }
        }
        this.tempGridArr.push({ x: x, y: y });
        return { x: x, y: y };
    };
    turnbaseconfig.family = [];
    turnbaseconfig.enemy = [];
    turnbaseconfig.wid = 50;
    /**
     *  生成网格坐标
     *  解决连个点在同一个坐标
     * @private
     * @static
     * @type {any[]}
     * @memberof turnbaseconfig
     */
    turnbaseconfig.tempGridArr = []; //[{x:,y:}]
    return turnbaseconfig;
}());
exports.default = turnbaseconfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7SUFBQTtJQXlFQSxDQUFDO0lBckVpQixtQkFBSSxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsa0JBQU0sQ0FBRyxDQUFDO2dCQUN4QixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QjtxQkFDSTtvQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDM0I7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVjLDBCQUFXLEdBQTFCLFVBQTJCLElBQVk7UUFDbkMsSUFBSSxRQUFRLEdBQVM7WUFDakIsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJO1lBQ0osS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUk7WUFDSixLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJO1lBQ2pDLElBQUk7WUFDSixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFBO1FBQ0QsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsb0NBQW9DO1lBQzNELFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLHFDQUFxQztTQUMvRDthQUNJO1lBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEscUNBQXFDO1lBQzVELFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLHFDQUFxQztTQUMvRDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFXYSx3QkFBUyxHQUF2QixVQUF3QixPQUFlLEVBQUUsT0FBZTtRQUNwRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQXZFYSxxQkFBTSxHQUFXLEVBQUUsQ0FBQztJQUNwQixvQkFBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixrQkFBRyxHQUFXLEVBQUUsQ0FBQztJQWlEL0I7Ozs7Ozs7T0FPRztJQUNZLDBCQUFXLEdBQVUsRUFBRSxDQUFDLENBQUEsV0FBVztJQWF0RCxxQkFBQztDQXpFRCxBQXlFQyxJQUFBO2tCQXpFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgdXNlciB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2V4OiBudW1iZXI7XG4gICAgdHlwZTogbnVtYmVyOy8vMDpmYW1pbHksMTplbmVteVxuICAgIC8v5L2N572uXG4gICAgZ3JpZFg6IG51bWJlcjtcbiAgICBncmlkWTogbnVtYmVyO1xuICAgIC8v6KGA6YePXG4gICAgYmxvb2Q6IG51bWJlcjtcbiAgICAvL+aKgOiDvVxuICAgIHNraWxsMTogbnVtYmVyO1xuICAgIHNraWxsMjogbnVtYmVyO1xuICAgIHNraWxsMzogbnVtYmVyO1xuXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0dXJuYmFzZWNvbmZpZyB7XG4gICAgcHVibGljIHN0YXRpYyBmYW1pbHk6IHVzZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgZW5lbXk6IHVzZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgd2lkOiBudW1iZXIgPSA1MDtcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZmFtaWx5LnNwbGljZSgwKTtcbiAgICAgICAgdGhpcy5lbmVteS5zcGxpY2UoMCk7XG4gICAgICAgIHRoaXMudGVtcEdyaWRBcnIuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyOiB1c2VyID0gdGhpcy5nZXRVc2VyRGF0YShqLCBpKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSA9IGDop5LoibIgJHtpfWA7XG4gICAgICAgICAgICAgICAgcGxheWVyLmluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFtaWx5LnB1c2gocGxheWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXkucHVzaChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldFVzZXJEYXRhKHR5cGU6IG51bWJlcik6IHVzZXIge1xuICAgICAgICBsZXQgdXNlckRhdGE6IHVzZXIgPSB7XG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICBzZXg6IDAsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgLy/kvY3nva5cbiAgICAgICAgICAgIGdyaWRYOiAwLFxuICAgICAgICAgICAgZ3JpZFk6IDAsXG4gICAgICAgICAgICAvL+ihgOmHj1xuICAgICAgICAgICAgYmxvb2Q6IDEwMCAqIE1hdGgucmFuZG9tKCkgKiAxMDAwLFxuICAgICAgICAgICAgLy/mioDog71cbiAgICAgICAgICAgIHNraWxsMTogMCxcbiAgICAgICAgICAgIHNraWxsMjogMCxcbiAgICAgICAgICAgIHNraWxsMzogMCxcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAwKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcmlkWFkoMSwgMik7XG4gICAgICAgICAgICB1c2VyRGF0YS5ncmlkWCA9IHBvcy54Oy8vTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCkgKyAxO1xuICAgICAgICAgICAgdXNlckRhdGEuZ3JpZFkgPSBwb3MueTsvL01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcmlkWFkoMTAsIDIpO1xuICAgICAgICAgICAgdXNlckRhdGEuZ3JpZFggPSBwb3MueDsvL01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpICsgMTA7XG4gICAgICAgICAgICB1c2VyRGF0YS5ncmlkWSA9IHBvcy55Oy8vTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIOeUn+aIkOe9keagvOWdkOagh1xuICAgICAqICDop6PlhrPov57kuKrngrnlnKjlkIzkuIDkuKrlnZDmoIdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7YW55W119XG4gICAgICogQG1lbWJlcm9mIHR1cm5iYXNlY29uZmlnXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGVtcEdyaWRBcnI6IGFueVtdID0gW107Ly9be3g6LHk6fV1cbiAgICBwdWJsaWMgc3RhdGljIGdldEdyaWRYWShvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlcikge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpICsgb2Zmc2V0WDtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyBvZmZzZXRZO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEdyaWRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh4ID09IHRoaXMudGVtcEdyaWRBcnJbaV0ueCAmJiB5ID09IHRoaXMudGVtcEdyaWRBcnJbaV0ueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0R3JpZFhZKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVtcEdyaWRBcnIucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/turnbase/turnmanager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e521flHhJVPjY2gPnZn55E+', 'turnmanager');
// scene/turnbase/turnmanager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerType = void 0;
var config_1 = require("./config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["hero"] = 0] = "hero";
    PlayerType[PlayerType["enemy"] = 1] = "enemy";
})(PlayerType = exports.PlayerType || (exports.PlayerType = {}));
var turnmanager = /** @class */ (function () {
    function turnmanager() {
    }
    turnmanager_1 = turnmanager;
    Object.defineProperty(turnmanager, "Inst", {
        get: function () {
            if (!this._inst) {
                this._inst = new turnmanager_1();
            }
            return this._inst;
        },
        enumerable: false,
        configurable: true
    });
    turnmanager.prototype.init = function (tM) {
        this.tMain = tM;
    };
    /**
     * 获取角色所在坐标
     * @param type 敌人，玩家
     * @param index 角色编号
     */
    turnmanager.prototype.getplayerPos = function (type, index) {
        var p = { x: 0, y: 0 };
        var list = config_1.default.enemy;
        if (type == PlayerType.hero) {
            list = config_1.default.family;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i].index == index) {
                p.x = list[i].gridX * config_1.default.wid;
                p.y = list[i].gridY * config_1.default.wid;
                return p;
            }
        }
        return p;
    };
    var turnmanager_1;
    turnmanager = turnmanager_1 = __decorate([
        ccclass
    ], turnmanager);
    return turnmanager;
}());
exports.default = turnmanager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS90dXJuYmFzZS90dXJubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ2xCLDJDQUFRLENBQUE7SUFDUiw2Q0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBUUQ7SUFBQTtJQW1DQSxDQUFDO29CQW5Db0IsV0FBVztJQUc1QixzQkFBa0IsbUJBQUk7YUFBdEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBVyxFQUFFLENBQUM7YUFDbEM7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFHRCwwQkFBSSxHQUFKLFVBQUssRUFBWTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0NBQVksR0FBWixVQUFhLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksQ0FBQyxHQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsZ0JBQWMsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLEdBQUcsZ0JBQWMsQ0FBQyxNQUFNLENBQUM7U0FDaEM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUN4QixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxnQkFBYyxDQUFDLEdBQUcsQ0FBQztnQkFDekMsT0FBTyxDQUFDLENBQUM7YUFDWjtTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDOztJQWxDZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW1DL0I7SUFBRCxrQkFBQztDQW5DRCxBQW1DQyxJQUFBO2tCQW5Db0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0dXJuYmFzZWNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB0dXJubWFpbiBmcm9tIFwiLi90dXJubWFpblwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gUGxheWVyVHlwZSB7XG4gICAgaGVybyA9IDAsXG4gICAgZW5lbXkgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBPUyB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHR1cm5tYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiB0dXJubWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0KCk6IHR1cm5tYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IHR1cm5tYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XG4gICAgfVxuICAgIHByaXZhdGUgdE1haW46IHR1cm5tYWluO1xuXG4gICAgaW5pdCh0TTogdHVybm1haW4pIHtcbiAgICAgICAgdGhpcy50TWFpbiA9IHRNO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluinkuiJsuaJgOWcqOWdkOagh1xuICAgICAqIEBwYXJhbSB0eXBlIOaVjOS6uu+8jOeOqeWutlxuICAgICAqIEBwYXJhbSBpbmRleCDop5LoibLnvJblj7dcbiAgICAgKi9cbiAgICBnZXRwbGF5ZXJQb3ModHlwZTogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogUE9TIHtcbiAgICAgICAgbGV0IHA6IFBPUyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBsZXQgbGlzdCA9IHR1cm5iYXNlY29uZmlnLmVuZW15O1xuICAgICAgICBpZiAodHlwZSA9PSBQbGF5ZXJUeXBlLmhlcm8pIHtcbiAgICAgICAgICAgIGxpc3QgPSB0dXJuYmFzZWNvbmZpZy5mYW1pbHk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGlzdFtpXS5pbmRleCA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHAueCA9IGxpc3RbaV0uZ3JpZFggKiB0dXJuYmFzZWNvbmZpZy53aWQ7XG4gICAgICAgICAgICAgICAgcC55ID0gbGlzdFtpXS5ncmlkWSAqIHR1cm5iYXNlY29uZmlnLndpZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
