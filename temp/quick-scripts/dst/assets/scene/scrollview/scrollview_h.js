
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9zY3JvbGx2aWV3L3Njcm9sbHZpZXdfaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW1HQztRQWhHRyxZQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGlCQUFXLEdBQVksU0FBUyxDQUFDO1FBR2pDLG9CQUFjLEdBQWtCLFNBQVMsQ0FBQztRQUdsQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFHM0IsZ0JBQVUsR0FBVyxHQUFHLENBQUM7O0lBK0VyQyxDQUFDO0lBOUVTLDRCQUFLLEdBQVg7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBakIsU0FBaUIsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7OztLQUV0QjtJQUVLLDJCQUFJLEdBQVY7Ozs7Z0JBQ0ksc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7O29DQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0NBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0NBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMs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RUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQS9GRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3REFDa0I7SUFXMUM7UUFEQyxRQUFRLEVBQUU7b0RBQ3NCO0lBcEJoQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUdoQztJQUFELG1CQUFDO0NBbkdELEFBbUdDLENBbkd5QyxFQUFFLENBQUMsU0FBUyxHQW1HckQ7a0JBbkdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVmlld19oIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1faDogY2MuTm9kZSA9IHVuZGVmaW5lZDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRfaG9yOiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsdmlld19ob3I6IGNjLlNjcm9sbFZpZXcgPSB1bmRlZmluZWQ7XG5cblxuICAgIHByaXZhdGUgdmlld1dpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udGVudE9yaW5naW5YOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjaGlsZE51bV9ob3I6IG51bWJlciA9IDg7XG4gICAgcHJpdmF0ZSBpdGVtQXJyX2hvcjogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBwb3NBcnJfaG9yOiBjYy5WZWMyW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHJpdmF0ZSBsZW5ndGhfaG9yOiBudW1iZXIgPSAxMDA7XG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnNldERhdGFfaG9yKCk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1faC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmlld1dpZHRoID0gdGhpcy5jb250ZW50X2hvci53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGVudE9yaW5naW5YID0gTWF0aC5mbG9vcih0aGlzLmNvbnRlbnRfaG9yLngpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGx2aWV3X2hvci5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMuaGFuZGxlU2Nyb2xpbmdfaG9yLCB0aGlzKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdExpc3RfaG9yKCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRMaXN0X2hvcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudF9ob3IuY2hpbGRyZW5Db3VudCA8IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZE51bV9ob3I7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9oKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggKz0gaXRlbS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYyID0gbmV3IGNjLlZlYzIoaXRlbS53aWR0aCAvIDIgKyBpdGVtLndpZHRoICogaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24odjIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRfaG9yLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1BcnJfaG9yLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV9ob3Iod2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldENvbnRlbnRTaXplX2hvcih3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh3aWR0aCA+IHRoaXMudmlld1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRfaG9yLnNldENvbnRlbnRTaXplKHdpZHRoLCB0aGlzLmNvbnRlbnRfaG9yLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhX2hvcigpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5sZW5ndGhfaG9yID4gMjAgPyAyMCA6IHRoaXMubGVuZ3RoX2hvcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgd2lkdGggKz0gdGhpcy5pdGVtX2gud2lkdGg7XG4gICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMih0aGlzLml0ZW1faC53aWR0aCAvIDIgKyB0aGlzLml0ZW1faC53aWR0aCAqIGksIDApO1xuICAgICAgICAgICAgdGhpcy5wb3NBcnJfaG9yLnB1c2godjIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV9ob3Iod2lkdGgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVuOyBpIDwgdGhpcy5sZW5ndGhfaG9yOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSB0aGlzLml0ZW1faC53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSBuZXcgY2MuVmVjMih0aGlzLml0ZW1faC53aWR0aCAvIDIgKyB0aGlzLml0ZW1faC53aWR0aCAqIGksIDApO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zQXJyX2hvci5wdXNoKHYyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVzZXRDb250ZW50U2l6ZV9ob3Iod2lkdGgpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGluZ19ob3IoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcnJfaG9yLmxlbmd0aCAqIHRoaXMuaXRlbV9oLndpZHRoIDwgdGhpcy52aWV3V2lkdGgpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCBjb250ZW50WCA9IE1hdGguZmxvb3IodGhpcy5jb250ZW50X2hvci54KTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jb250ZW50T3JpbmdpblggLSBjb250ZW50WDtcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIHRoaXMuaXRlbV9oLndpZHRoKTtcbiAgICAgICAgaWYgKGNvdW50IDwgMCB8fCBjb3VudCArIHRoaXMuaXRlbUFycl9ob3IubGVuZ3RoID4gdGhpcy5wb3NBcnJfaG9yLmxlbmd0aCB8fCBjb3VudCA9PSB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICBmb3IgKGxldCBpID0gY291bnQ7IGkgPCBjb3VudCArIHRoaXMuaXRlbUFycl9ob3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXJyX2hvcltpIC0gY291bnRdO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaSArIFwiXCI7XG4gICAgICAgICAgICBpdGVtLnggPSB0aGlzLnBvc0Fycl9ob3JbaV0ueDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==