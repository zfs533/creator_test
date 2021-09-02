import HandleBar from "./handleBar";

const { ccclass, property } = cc._decorator;
/**
 * +-角度象限 
 * 0-90:1,
 * 90-180:2,
 * 180-270:3,
 * 270-360:4,
 */
export enum AngleLocation {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
}
export enum ScreenBorder {
    left = -320,
    down = -1136 / 2,
    width = 320,
    height = 1136 / 2,
}
@ccclass
export default class Bullet extends cc.Component {

    private _speed: number = 12;
    private _isMove: boolean = true;
    private _radian: number = Math.PI / 3;
    private _isBorder = false;

    onLoad() {
        // this._radian = Math.PI / (Math.floor(Math.random() * 10) +1)
    }


    onCollisionEnter(other: cc.BoxCollider, self: any) {
        let node = other.node;
        let pos = this.node.getPosition();
        let p1 = this.node.convertToWorldSpaceAR(pos);
        let p = node.convertToNodeSpaceAR(p1);
        if (node.name == "handleBar") {
            let hb: HandleBar = other.node.getComponent(HandleBar);
            let angle: number = this._radian * 180 / Math.PI;
            angle *= -1
            if (hb.speed != 0) {
                console.log(hb.speed);
                angle -= p.x
                let al: AngleLocation = this.getAngleLocation(angle);
                if (al == AngleLocation.three || al == AngleLocation.four) {
                    angle += p.x;
                }
            }
            // console.log(Math.floor(angle), Math.floor(angle % 360));
            this._radian = angle * Math.PI / 180;
            return;
        }

        if (node.name == "wall") {
            // console.log("------------------");
            // console.log(Math.floor(pos.x), Math.floor(pos.y));
            // console.log(node.x, node.y);
            if (pos.x > node.x - node.width / 2 && pos.x < node.x + node.width / 2) {
                if (pos.y < node.y) {
                    let angle: number = this._radian * 180 / Math.PI;
                    angle *= -1
                    this._radian = angle * Math.PI / 180;
                    return;
                }
                if (pos.y > node.y) {
                    let angle: number = this._radian * 180 / Math.PI;
                    angle *= -1
                    this._radian = angle * Math.PI / 180;
                    return;
                }
            }
            if (pos.x < node.x) {
                let angle: number = this._radian * 180 / Math.PI;
                angle += 180
                this._radian = -angle * Math.PI / 180;
                return;
            }
            if (pos.x > node.x) {
                let angle: number = this._radian * 180 / Math.PI;
                angle -= 180
                this._radian = -angle * Math.PI / 180;
                return;
            }

        }
    }

    /**
     * 移动
     */
    update() {
        if (this._isMove) {
            this.moving();
        }
        this._jugeBorder();
    }

    moving() {
        let pos = this.node.getPosition();
        let xx = pos.x + Math.cos(this._radian) * this._speed;
        let yy = pos.y + Math.sin(this._radian) * this._speed;
        this.node.setPosition(cc.v2(xx, yy));
    }

    /**
     * 越界判定
     */
    _jugeBorder() {
        let pos = this.node.getPosition();
        if (pos.x < ScreenBorder.left && !this._isBorder) {
            this._isBorder = true;
            let angle: number = this._radian * 180 / Math.PI;
            angle += 180
            this._radian = -angle * Math.PI / 180;
            return;
        }

        if (pos.x > ScreenBorder.width && !this._isBorder) {
            this._isBorder = true;
            let angle: number = this._radian * 180 / Math.PI;
            angle -= 180
            this._radian = -angle * Math.PI / 180;
            return;
        }

        if (pos.y < ScreenBorder.down && !this._isBorder) {
            this._isBorder = true;
            let angle: number = this._radian * 180 / Math.PI;
            angle *= -1
            this._radian = angle * Math.PI / 180;
            return;
        }

        if (pos.y > ScreenBorder.height && !this._isBorder) {
            this._isBorder = true;
            let angle: number = this._radian * 180 / Math.PI;
            angle *= -1
            this._radian = angle * Math.PI / 180;
            return;
        }

        this._isBorder = false;
    }

    /**
     * 获取角度处于第几象限
     * @param angle 角度
     * @returns 
     */
    getAngleLocation(angle: number) {
        angle = angle % 360;
        let temp = angle;
        let re = 0;
        if (temp > 0) {
            if (temp >= 0 && temp <= 90) {
                re = AngleLocation.one;
            }
            else if (temp >= 90 && temp <= 180) {
                re = AngleLocation.two;
            }
            else if (temp >= 180 && temp <= 270) {
                re = AngleLocation.three;
            }
            else {
                re = AngleLocation.four;
            }
        }
        else {
            if (temp >= -90 && temp <= 0) {
                re = AngleLocation.four;
            }
            else if (temp >= -180 && temp <= -90) {
                re = AngleLocation.three;
            }
            else if (temp >= -270 && temp <= -180) {
                re = AngleLocation.two;
            }
            else {
                re = AngleLocation.one;
            }
        }
        return re;
    }
}
