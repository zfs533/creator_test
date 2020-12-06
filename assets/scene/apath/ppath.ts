import pitem from "./pitem";

const { ccclass, property } = cc._decorator;
/**
 * 寻路组件
 */
@ccclass
export default class ppath extends cc.Component {

    /* 起点 */
    @property(cc.Node)
    role: cc.Node = null;

    /* 终点 */
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
                /* 是否已经包含在了openlist中 */
                let itemIn = this.isInOpenList(item);
                if (!itemIn) {
                    item.parent = center;
                    item.G = center.G + item.value_h;
                    if (item.x != center.x && item.y != center.y) {
                        item.G = center.G + item.value_v;
                    }
                    item.F = this.getF(item);
                    this.openlist.push(item);

                    /* 检查是否已经到终点 */
                    let p1 = cc.v2(item.x, item.y);
                    let p2 = cc.v2(this.distination.x, this.distination.y);
                    if (p1.sub(p2).mag() < item.width) {
                        isFined = true;
                        this.closelist.push(item);
                        console.log("finish");
                        let pathArr: pitem[] = [];
                        /* 最终路径 */
                        this.getPath(item, pathArr);
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

    /**
     * 获取最终路径
     * @param item 
     * @param pathArr 
     */
    getPath(item: pitem, pathArr: pitem[]) {
        pathArr.push(item);
        if (item.parent) {
            this.getPath(item.parent, pathArr);
        }
    }

    /**
     * 是否在障碍物上
     * @param item 
     */
    isObstacle(item: pitem) {
        let list: cc.Node[] = this.obstacle.children;
        for (let i = 0; i < list.length; i++) {
            if (item.x >= list[i].x && item.y >= list[i].y && item.x < list[i].x + list[i].width && item.y < list[i].y + list[i].height) {
                return true;
            }
        }
        return false;
    }

    /**
     * 将当前center从openlist中移除
     * @param center 
     */
    removeCenter(center: pitem) {
        for (let i = 0; i < this.openlist.length; i++) {
            if (this.openlist[i].x == center.x && this.openlist[i].y == center.y) {
                this.openlist.splice(i, 1);
                break;
            }
        }
    }

    /**
     * 计算F值
     * @param item 
     */
    getF(item: pitem): number {
        let h: number = Math.abs(this.distination.x - item.x) * item.value_h;
        let v: number = Math.abs(this.distination.y - item.y) * item.value_h;
        let H = h + v;
        let F = H + item.G;
        return F;
    }

    /**
     * 检查center周围的方格是否在openlist中
     * @param item 
     */
    isInOpenList(item: pitem): any {
        let obj = this.openlist.find((o) => {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        })
        return obj ? obj : false;
    }

    /**
     * 检查center周围的方格是否在closelist中
     * @param item 
     */
    isInCloseList(item: pitem) {
        let obj = this.closelist.find((o) => {
            if (o.x == item.x && o.y == item.y) {
                return o;
            }
        })
        return obj ? true : false;
    }

    /**
     * 创建一个方格子
     */
    getPitem(): pitem {
        let item: pitem = new pitem();
        return item;
    }
}
