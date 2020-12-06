
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