
const { ccclass, property } = cc._decorator;

@ccclass
export default class pmain extends cc.Component {

    @property(cc.Node)
    role: cc.Node = null;

    @property(cc.Node)
    distination: cc.Node = null;

    private wid: number = 50;
    onLoad() {
        // let v2 = new cc.Vec2(this.wid * 3, this.wid * 5);
        // this.role.setPosition(v2);
        // let v22 = new cc.Vec2(this.wid * 16, this.wid * 5);
        // this.distination.setPosition(v22);
    }

    start() {
    }
}
