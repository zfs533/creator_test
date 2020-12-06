import pitem from "./pitem";

const { ccclass, property } = cc._decorator;
/**
 * 寻路组件debug
 */
@ccclass
export default class ppath extends cc.Component {

    @property(cc.Node)
    role: cc.Node = null;

    @property(cc.Node)
    distination: cc.Node = null;

    @property(cc.Node)
    obstacle: cc.Node = null;

    private startPos: cc.Vec2;
    private endPos: cc.Vec2;
    private openlist: pitem[] = [];
    private closelist: pitem[] = [];

    private tempList: cc.Node[] = [];

    onLoad() {
        this.startPos = this.role.getPosition();
        this.endPos = this.distination.getPosition();
    }

    start() {
        this.begin();
    }
    drawPoint(item: pitem) {
        let line: cc.Node = new cc.Node();
        this.node.addChild(line);
        line.addComponent(cc.Graphics);
        let graphics = line.getComponent(cc.Graphics);
        graphics.fillColor = cc.color(255, 0, 0, 255);
        graphics.circle(item.x, item.y, 20);
        graphics.fill();
        // this.tempList.push(line);
    }
    begin() {
        let origin: pitem = this.getPitem();
        origin.F = 0;
        origin.G = 0;
        origin.H = 0;
        origin.x = this.startPos.x;
        origin.y = this.startPos.y;
        let isFined: boolean = false;
        let center: pitem = origin;
        this.openlist.push(center);
        while (!isFined) {
            this.clearTempList();
            // this.drawPoint(center);
            /* 找最小F值作为新center */
            this.openlist.sort((a, b) => { return a.F - b.F });
            center = this.openlist[0];
            /* 将center从openlist中移除 */
            this.removeCenter(center);
            this.closelist.push(center);
            for (let i = 0; i < 8; i++) {
                let item: pitem = this.getPitem();
                switch (i) {
                    case 0:/* 上 */
                        item.x = center.x;
                        item.y = center.y + center.height;
                        break;
                    case 1:/* 右上 */
                        item.x = center.x + center.width;
                        item.y = center.y + center.height;
                        break;
                    case 2:/* 右 */
                        item.x = center.x + center.width;
                        item.y = center.y;
                        break;
                    case 3:/* 右下 */
                        item.x = center.x + center.width;
                        item.y = center.y - center.height;
                        break;
                    case 4:/* 下 */
                        item.x = center.x;
                        item.y = center.y - center.height;
                        break;
                    case 5:/* 左下 */
                        item.x = center.x - center.width;
                        item.y = center.y - center.height;
                        break;
                    case 6:/* 左 */
                        item.x = center.x - center.width;
                        item.y = center.y;
                        break;
                    case 7:/* 左上 */
                        item.x = center.x - center.width;
                        item.y = center.y + center.height;
                        break;
                }
                /* 是否在障碍物上 */
                if (this.isObstacle(item)) {
                    continue;
                }
                /* 是否在选中列表 */
                if (this.isInCloseList(item)) {
                    continue;
                }
                this.drawtemp(item);
                let itemIn = this.isInOpenList(item);
                if (!itemIn) {
                    item.parent = center;
                    item.G = center.G + item.value_h;
                    if (item.x != center.x && item.y != center.y) {
                        item.G = center.G + item.value_v;
                    }
                    item.F = this.getF(item);
                    this.openlist.push(item);

                    let p1 = cc.v2(item.x, item.y);
                    let p2 = cc.v2(this.distination.x, this.distination.y);
                    if (p1.sub(p2).mag() < item.width) {
                        isFined = true;
                        this.closelist.push(item);
                        console.log("finish");
                        let pathArr: pitem[] = [];
                        this.getPath(item, pathArr);
                        pathArr.forEach((obj) => { this.drawPoint(obj); });
                        break;
                    }
                }
                else {
                    item = itemIn;
                    /* 比较G值，取最小的 */
                    /* 基于当前center的G值 */
                    let currentG = center.G + item.value_h;
                    if (item.x != center.x && item.y != center.y) {
                        currentG = center.G + item.value_v;
                    }
                    /* 如果基于当前center的G值更小，则以当前center为parent */
                    if (currentG < item.G) {
                        item.parent = center;
                        item.G = currentG;
                        item.F = this.getF(item);
                    }
                }

            }
        }
    }

    getPath(item: pitem, pathArr: pitem[]) {
        pathArr.push(item);
        if (item.parent) {
            this.getPath(item.parent, pathArr);
        }
    }

    /* 是否在障碍物上 */
    isObstacle(item: pitem) {
        let list: cc.Node[] = this.obstacle.children;
        for (let i = 0; i < list.length; i++) {
            if (item.x >= list[i].x && item.y >= list[i].y && item.x < list[i].x + list[i].width && item.y < list[i].y + list[i].height) {
                return true;
            }
        }
        return false;
    }


    drawtemp(item: pitem) {
        let line: cc.Node = new cc.Node();
        this.node.addChild(line);
        line.addComponent(cc.Graphics);
        let graphics = line.getComponent(cc.Graphics);
        graphics.fillColor = cc.color(255, 255, 0, 255);
        graphics.circle(item.x, item.y, 22);
        graphics.fill();
        this.tempList.push(line);
    }

    clearTempList() {
        this.tempList.forEach((item) => {
            item.destroy();
        });
        this.tempList.splice(0);
    }

    removeCenter(center: pitem) {
        for (let i = 0; i < this.openlist.length; i++) {
            if (this.openlist[i].x == center.x && this.openlist[i].y == center.y) {
                this.openlist.splice(i, 1);
                break;
            }
        }
    }

    getF(item: pitem): number {
        let h: number = Math.abs(this.distination.x - item.x) * item.value_h;
        let v: number = Math.abs(this.distination.y - item.y) * item.value_h;
        let H = h + v;
        let F = H + item.G;
        return F;
    }

    isInOpenList(item: pitem): any {
        let obj = this.openlist.find((o) => {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        })
        return obj ? obj : false;
    }
    isInCloseList(item: pitem) {
        let obj = this.closelist.find((o) => {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        })
        return obj ? true : false;
    }

    getPitem(): pitem {
        let item: pitem = new pitem();
        // item.G = item.F = item.H = 0;
        return item;
    }
}
