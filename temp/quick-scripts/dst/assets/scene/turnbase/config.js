
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