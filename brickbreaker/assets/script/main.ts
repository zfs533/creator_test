// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import HandleBar from "./handleBar";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    handleBar: cc.Node = undefined;

    @property(cc.Node)
    wallLayer: cc.Node = undefined;

    @property(cc.Prefab)
    wallPre: cc.Node = undefined;

    @property(cc.Prefab)
    bulletPre: cc.Node = undefined;

    onLoad() {
        cc.game.setFrameRate(80);
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchmove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchend, this);

        this.schedule(() => {
            let bt = cc.instantiate(this.bulletPre);
            bt.setPosition(cc.v2(-50, 130));
            this.node.addChild(bt);
        }, 1, 10);
    }

    start() {
        let rand1 = Math.floor(Math.random() * 30) + 2;
        let rand2 = Math.floor(Math.random() * 40) + 2;
        console.log(rand1, rand2)
        let width = 640;
        let height = 1136;
        for (let i = 0; i < 40; i++) {
            for (let j = 0; j < 60; j++) {
                // if (i % rand1 == 1) continue;
                // if (j % rand2 == 1) continue;
                let wall = cc.instantiate(this.wallPre);
                wall.x = -width / 2 + wall.width / 2 + wall.width * i;
                wall.y = height / 2 - wall.height / 2 - wall.height * j;
                this.wallLayer.addChild(wall);
            }
        }
    }

    _touchmove(event: cc.Touch) {
        let v2: cc.Vec2 = event.getDelta();
        this.handleBar.getComponent(HandleBar).speed = v2.x;
        this.handleBar.x += v2.x;
    }
    _touchend(event: cc.Touch) {
        this.handleBar.getComponent(HandleBar).speed = 0;
    }
}
