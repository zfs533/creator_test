
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/ballbattle/ballManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fbb0E25hpBrLafEtuQD05d', 'ballManager');
// scene/ballbattle/ballManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = require("./ball");
var BallManager = /** @class */ (function () {
    function BallManager() {
        this.ballList = [];
    }
    BallManager.prototype.init = function (node, bbl) {
        this.ballList.splice(0);
        this.node = node;
        this.bbl = bbl;
    };
    /**
     * 添加到列表
     * @param ball
     */
    BallManager.prototype.addBall = function (ball) {
        this.ballList.push(ball);
    };
    /**
     * 分裂
     */
    BallManager.prototype.separate = function () {
        var temp = [];
        for (var i = 0; i < this.ballList.length; i++) {
            var ball = this.ballList[i];
            ball.separate();
            var newBall = cc.instantiate(this.bbl.preBall);
            newBall.getComponent(ball_1.default).setBgScale(ball.getBgScale() / 2);
            this.node.addChild(newBall);
            newBall.getComponent(ball_1.default).setPosition(ball.getPosition());
            newBall.getComponent(ball_1.default).separateMove(ball);
            temp.push(newBall.getComponent(ball_1.default));
        }
        this.ballList = this.ballList.concat(temp);
    };
    return BallManager;
}());
var ballMgr = new BallManager();
exports.default = ballMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9iYWxsYmF0dGxlL2JhbGxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBSTFCO0lBQUE7UUFHWSxhQUFRLEdBQVcsRUFBRSxDQUFDO0lBbUNsQyxDQUFDO0lBakNHLDBCQUFJLEdBQUosVUFBSyxJQUFhLEVBQUUsR0FBZTtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkJBQU8sR0FBUCxVQUFRLElBQVU7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxDQUFDO1NBRXpDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNoQyxrQkFBZSxPQUFPLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tIFwiLi9iYWxsXCI7XG5pbXBvcnQgQmFsbEJhdHRsZSBmcm9tIFwiLi9iYWxsYmF0dGxlXCI7XG5cblxuY2xhc3MgQmFsbE1hbmFnZXIge1xuICAgIHByaXZhdGUgbm9kZTogY2MuTm9kZTtcbiAgICBwcml2YXRlIGJibDogQmFsbEJhdHRsZTtcbiAgICBwcml2YXRlIGJhbGxMaXN0OiBCYWxsW10gPSBbXTtcblxuICAgIGluaXQobm9kZTogY2MuTm9kZSwgYmJsOiBCYWxsQmF0dGxlKSB7XG4gICAgICAgIHRoaXMuYmFsbExpc3Quc3BsaWNlKDApO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmJibCA9IGJibDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDliLDliJfooahcbiAgICAgKiBAcGFyYW0gYmFsbCAgXG4gICAgICovXG4gICAgYWRkQmFsbChiYWxsOiBCYWxsKSB7XG4gICAgICAgIHRoaXMuYmFsbExpc3QucHVzaChiYWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliIboo4JcbiAgICAgKi9cbiAgICBzZXBhcmF0ZSgpIHtcbiAgICAgICAgbGV0IHRlbXA6IEJhbGxbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiYWxsOiBCYWxsID0gdGhpcy5iYWxsTGlzdFtpXTtcbiAgICAgICAgICAgIGJhbGwuc2VwYXJhdGUoKTtcbiAgICAgICAgICAgIGxldCBuZXdCYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYmwucHJlQmFsbCk7XG4gICAgICAgICAgICBuZXdCYWxsLmdldENvbXBvbmVudChCYWxsKS5zZXRCZ1NjYWxlKGJhbGwuZ2V0QmdTY2FsZSgpIC8gMik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QmFsbCk7XG4gICAgICAgICAgICBuZXdCYWxsLmdldENvbXBvbmVudChCYWxsKS5zZXRQb3NpdGlvbihiYWxsLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgbmV3QmFsbC5nZXRDb21wb25lbnQoQmFsbCkuc2VwYXJhdGVNb3ZlKGJhbGwpO1xuICAgICAgICAgICAgdGVtcC5wdXNoKG5ld0JhbGwuZ2V0Q29tcG9uZW50KEJhbGwpKTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFsbExpc3QgPSB0aGlzLmJhbGxMaXN0LmNvbmNhdCh0ZW1wKTtcbiAgICB9XG5cbn1cblxubGV0IGJhbGxNZ3IgPSBuZXcgQmFsbE1hbmFnZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGJhbGxNZ3I7XG4iXX0=