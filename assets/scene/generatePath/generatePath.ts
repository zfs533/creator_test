const { ccclass, property } = cc._decorator;
@ccclass
export default class GeneratePath extends cc.Component {

    @property(cc.Prefab)
    pointPrefab: cc.Prefab = undefined;
    private index: number = 0;
    private isCancel: boolean = false;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this), this);
    }

    /**
     * 标记路点
     * @param event 
     */
    touchEnd(event: cc.Touch) {
        if (this.isCancel) {
            this.isCancel = false;
            return;
        }
        let pos = event.getLocation();
        let node = cc.instantiate(this.pointPrefab);
        let v2: cc.Vec2 = new cc.Vec2(pos.x, pos.y);
        let result = this.node.convertToNodeSpaceAR(v2);
        node.setPosition(result);
        node.on(cc.Node.EventType.TOUCH_END, this.onTouchPointNode.bind(this), this);
        node.name = this.index + "";
        this.node.addChild(node);
        this.index++;
    }

    /**
     * 删除路点
     * @param event 
     */
    onTouchPointNode(event: cc.Event) {
        event.currentTarget.destroy();
        this.isCancel = true;
    }

    /**
     * 生成路点
     */
    generatePath() {
        let list = this.node.children;
        let paths = [];
        list.sort((a, b) => { return Number(a.name) - Number(b.name) });
        for (let i = 0; i < list.length; i++) {
            let xx = list[i].position.x.toFixed(2);
            let yy = list[i].position.y.toFixed(2);
            let pts = { x: xx, y: yy };
            paths.push(pts);
        }
        console.log(JSON.stringify(paths));
    }
}
