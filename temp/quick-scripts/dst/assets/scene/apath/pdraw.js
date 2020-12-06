
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