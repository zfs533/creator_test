const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    center: cc.Node = null;

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    role: cc.Node = null;

    private circleR: number = 100;
    private radian: number = 0;
    private speed: number = 3;
    private isMoving: boolean = false;
    onLoad() {
        this.bg.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this));
        this.bg.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this));
        this.bg.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this));
        this.bg.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd.bind(this));
    }

    touchStart(event: cc.Touch) {
        this.isMoving = true;
        let pos = this.bg.convertToNodeSpaceAR(event.getLocation());
        this.center.setPosition(pos);
    }
    touchMove(event: cc.Touch) {
        let radian = Math.atan2(this.center.y, this.center.x);
        let ang = radian * 180 / Math.PI;
        this.role.angle = ang;
        if (this.center.getPosition().subSelf(cc.v2(0, 0)).mag() >= this.circleR) {
            this.center.x = Math.cos(radian) * this.circleR;
            this.center.y = Math.sin(radian) * this.circleR;
        }
        this.center.x += event.getDelta().x;
        this.center.y += event.getDelta().y;
        this.radian = radian;

    }
    touchEnd() {
        this.isMoving = false;
        this.center.x = this.center.y = 0;
    }
    update() {
        if (this.isMoving) {
            this.role.x += Math.cos(this.radian) * this.speed;
            this.role.y += Math.sin(this.radian) * this.speed;
        }
    }

}
