const { ccclass, property } = cc._decorator;
@ccclass
export default class Ball extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = undefined;

    private time: number = 0.4;

    onLoad() {
        let rotate = cc.rotateBy(5, 720);
        cc.tween(this.bg).then(rotate.repeatForever()).start();
    }

    getPosition() {
        return this.node.getPosition();
    }

    setPosition(pos: cc.Vec2) {
        this.node.setPosition(pos);
    }

    /**
     * 获取bg的scale
     */
    getBgScale() {
        return this.bg.scale;
    }

    /**
     * 设置bg的scale
     * @param scale 
     */
    setBgScale(scale: number) {
        this.bg.scale = scale;
    }

    /**
     * 一分为二
     */
    separate() {
        let scaleTo = cc.scaleTo(this.time, this.bg.scale / 2, this.bg.scale / 2);
        cc.tween(this.bg).then(scaleTo).start();
    }

    /**
     * 分裂时，朝着指定方向移动一段位移
     */
    separateMove(momBall: Ball) {
        let xx = momBall.getPosition().x + momBall.getBgScale() * 201 * Math.cos(Math.random() * 360);
        let yy = momBall.getPosition().y + momBall.getBgScale() * 201 * Math.cos(Math.random() * 360);
        let moveTo = cc.moveTo(this.time, xx, yy);
        let scale = momBall.getBgScale();
        let scaleto = cc.scaleTo(this.time, scale / 2, scale / 2);
        cc.tween(this.node).then(moveTo.easing(cc.easeIn(this.time))).start();
    }
}
