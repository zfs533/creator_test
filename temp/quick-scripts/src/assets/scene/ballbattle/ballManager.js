"use strict";
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