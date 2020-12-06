"use strict";
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