"use strict";
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