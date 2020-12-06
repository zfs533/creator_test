
const { ccclass, property } = cc._decorator;

@ccclass
export default class ScrollView_v extends cc.Component {

    @property(cc.Node)
    item_v: cc.Node = undefined;

    @property(cc.Node)
    content_ver: cc.Node = undefined;

    @property(cc.ScrollView)
    scrollview_ver: cc.ScrollView = undefined;


    private viewHeight: number = 0;
    private contentOringinY: number = 0;
    private count: number = 0;
    private childNum_ver: number = 12;
    private itemArr_ver: cc.Node[] = [];
    private posArr_ver: cc.Vec2[] = [];

    @property()
    private length_ver: number = 100;
    async start() {
        await this.init();
        this.setData_ver();

    }

    async init() {
        return new Promise(async resolve => {
            this.item_v.active = false;
            this.viewHeight = this.content_ver.height;
            this.contentOringinY = Math.floor(this.content_ver.y);
            this.scrollview_ver.node.on("scrolling", this.handleScroling_ver, this);
            await this.initList_ver();
            resolve();
        });
    }

    async initList_ver() {
        return new Promise(async resolve => {
            if (this.content_ver.childrenCount < 1) {
                let height = 0;
                for (let i = 0; i < this.childNum_ver; i++) {
                    let item = cc.instantiate(this.item_v);
                    item.active = true;
                    item.getChildByName("lb").getComponent(cc.Label).string = i + "";
                    height += item.height;
                    let v2 = new cc.Vec2(0, -item.height / 2 - item.height * i);
                    item.setPosition(v2);
                    this.content_ver.addChild(item);
                    this.itemArr_ver.push(item);
                    this.resetContentSize_ver(height);
                }
            }

            resolve();
        });
    }

    resetContentSize_ver(height: number) {
        if (height > this.viewHeight) {
            this.content_ver.setContentSize(this.content_ver.width, height);
        }
    }

    setData_ver() {
        let height = 0;
        let len: number = this.length_ver > 20 ? 20 : this.length_ver;
        for (let i = 0; i < len; i++) {
            height += this.item_v.height;
            let v2 = new cc.Vec2(0, -this.item_v.height / 2 - this.item_v.height * i);
            this.posArr_ver.push(v2);
        }
        this.resetContentSize_ver(height);
        this.scheduleOnce(() => {
            for (let i = len; i < this.length_ver; i++) {
                height += this.item_v.height;
                let v2 = new cc.Vec2(0, -this.item_v.height / 2 - this.item_v.height * i);
                this.posArr_ver.push(v2);
            }
            this.resetContentSize_ver(height);
        }, 1);
    }

    handleScroling_ver() {
        if (this.itemArr_ver.length * this.item_v.height < this.viewHeight) { return; }
        let contentY = Math.floor(this.content_ver.y);
        let distance = contentY - this.contentOringinY;
        let count = Math.floor(distance / this.item_v.height);
        if (count < 0 || count + this.itemArr_ver.length > this.posArr_ver.length || count == this.count) {
            return;
        }
        this.count = count;
        for (let i = count; i < count + this.itemArr_ver.length; i++) {
            let item = this.itemArr_ver[i - count];
            item.getChildByName("lb").getComponent(cc.Label).string = i + "";
            item.y = this.posArr_ver[i].y;
        }
    }
}
