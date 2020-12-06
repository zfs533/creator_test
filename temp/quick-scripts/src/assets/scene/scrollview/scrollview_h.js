"use strict";
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