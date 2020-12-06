
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