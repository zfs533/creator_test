
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