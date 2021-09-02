const { ccclass, property } = cc._decorator;

@ccclass
export default class Wall extends cc.Component {

    onCollisionEnter(other: cc.BoxCollider, self: any) {
        let node = other.node;
        if (node.name == "bullet") {
            this.node.destroy();
        }
    }
}
