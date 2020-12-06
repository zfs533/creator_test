import { user } from "./config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class playerbase extends cc.Component {
    @property(cc.Label)
    nameLb: cc.Label = null;
    public data: user = null;

    /* 原始坐标 */
    protected originxPos: cc.Vec2;

    onLoad() {
        this.originxPos = new cc.Vec2(this.node.x, this.node.y);
    }

    start() {
    }

    setBaseInfo(dt: user) {
        this.data = dt;
        this.nameLb.string = dt.name;
    }

    gotoPlay(pos: cc.Vec2, rotate: number, callbk: Function) {
        let time = 0.5;
        let rotateTime = 0.2;
        let moveTo = cc.moveTo(time, pos);
        let rotateTo = cc.rotateTo(rotateTime, rotate);
        let rotateBack = cc.rotateTo(rotateTime, 0);
        let moveBack = cc.moveTo(time, this.originxPos);
        let callback = cc.callFunc(() => {
            callbk(this.data);
        });
        let sequence = cc.sequence(moveTo, rotateTo, rotateBack, moveBack, callback);
        this.node.runAction(sequence);
    }
}
