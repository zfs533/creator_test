import Ball from "./ball";
import ballMgr from "./ballManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallBattle extends cc.Component {

    @property(cc.Prefab)
    preBall: cc.Prefab = null;

    onLoad() {
        ballMgr.init(this.node, this);
    }

    start() {
        let ball = cc.instantiate(this.preBall);
        ballMgr.addBall(ball.getComponent(Ball));
        this.node.addChild(ball);
    }

    /**
     * test
     */
    buttonTest() {
        ballMgr.separate();
    }
}
