
const { ccclass, property } = cc._decorator;

@ccclass
export default class ScrollView_h extends cc.Component {

    @property(cc.Node)
    item_h: cc.Node = undefined;

    @property(cc.Node)
    content_hor: cc.Node = undefined;

    @property(cc.ScrollView)
    scrollview_hor: cc.ScrollView = undefined;


    private viewWidth: number = 0;
    private contentOringinX: number = 0;
    private count: number = 0;
    private childNum_hor: number = 8;
    private itemArr_hor: cc.Node[] = [];
    private posArr_hor: cc.Vec2[] = [];

    @property()
    private length_hor: number = 100;
    async start() {
        await this.init();
        this.setData_hor();

    }

    async init() {
        return new Promise(async resolve => {
            this.item_h.active = false;
            this.viewWidth = this.content_hor.width;
            this.contentOringinX = Math.floor(this.content_hor.x);
            this.scrollview_hor.node.on("scrolling", this.handleScroling_hor, this);
            await this.initList_hor();
            resolve();
        });
    }

    async initList_hor() {
        return new Promise(async resolve => {
            if (this.content_hor.childrenCount < 1) {
                let width = 0;
                for (let i = 0; i < this.childNum_hor; i++) {
                    let item = cc.instantiate(this.item_h);
                    item.active = true;
                    item.getChildByName("lb").getComponent(cc.Label).string = i + "";
                    width += item.width;
                    let v2 = new cc.Vec2(item.width / 2 + item.width * i, 0);
                    item.setPosition(v2);
                    this.content_hor.addChild(item);
                    this.itemArr_hor.push(item);
                    this.resetContentSize_hor(width);
                }
            }

            resolve();
        });
    }

    resetContentSize_hor(width: number) {
        if (width > this.viewWidth) {
            this.content_hor.setContentSize(width, this.content_hor.height);
        }
    }

    setData_hor() {
        let width = 0;
        let len: number = this.length_hor > 20 ? 20 : this.length_hor;
        for (let i = 0; i < len; i++) {
            width += this.item_h.width;
            let v2 = new cc.Vec2(this.item_h.width / 2 + this.item_h.width * i, 0);
            this.posArr_hor.push(v2);
        }
        this.resetContentSize_hor(width);
        this.scheduleOnce(() => {
            for (let i = len; i < this.length_hor; i++) {
                width += this.item_h.width;
                let v2 = new cc.Vec2(this.item_h.width / 2 + this.item_h.width * i, 0);
                this.posArr_hor.push(v2);
            }
            this.resetContentSize_hor(width);
        }, 1);
    }

    handleScroling_hor() {
        if (this.itemArr_hor.length * this.item_h.width < this.viewWidth) { return; }
        let contentX = Math.floor(this.content_hor.x);
        let distance = this.contentOringinX - contentX;
        let count = Math.floor(distance / this.item_h.width);
        if (count < 0 || count + this.itemArr_hor.length > this.posArr_hor.length || count == this.count) {
            return;
        }
        this.count = count;
        for (let i = count; i < count + this.itemArr_hor.length; i++) {
            let item = this.itemArr_hor[i - count];
            item.getChildByName("lb").getComponent(cc.Label).string = i + "";
            item.x = this.posArr_hor[i].x;
        }
    }
}
