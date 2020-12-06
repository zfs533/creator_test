"use strict";
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