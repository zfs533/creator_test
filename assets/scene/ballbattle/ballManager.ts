import Ball from "./ball";
import BallBattle from "./ballbattle";


class BallManager {
    private node: cc.Node;
    private bbl: BallBattle;
    private ballList: Ball[] = [];

    init(node: cc.Node, bbl: BallBattle) {
        this.ballList.splice(0);
        this.node = node;
        this.bbl = bbl;
    }

    /**
     * 添加到列表
     * @param ball  
     */
    addBall(ball: Ball) {
        this.ballList.push(ball);
    }

    /**
     * 分裂
     */
    separate() {
        let temp: Ball[] = [];
        for (let i = 0; i < this.ballList.length; i++) {
            let ball: Ball = this.ballList[i];
            ball.separate();
            let newBall = cc.instantiate(this.bbl.preBall);
            newBall.getComponent(Ball).setBgScale(ball.getBgScale() / 2);
            this.node.addChild(newBall);
            newBall.getComponent(Ball).setPosition(ball.getPosition());
            newBall.getComponent(Ball).separateMove(ball);
            temp.push(newBall.getComponent(Ball));

        }
        this.ballList = this.ballList.concat(temp);
    }

}

let ballMgr = new BallManager();
export default ballMgr;
