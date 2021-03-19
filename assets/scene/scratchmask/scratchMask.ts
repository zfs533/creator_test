
//参考:https://forum.cocos.org/t/topic/91302
const { ccclass, property } = cc._decorator;
const CLEAR_LINE_WIDTH: number = 30;
@ccclass
export default class ScratchMask extends cc.Component {
    @property(cc.Node)
    maskNode: cc.Node = undefined;

    @property(cc.Node)
    ticketNode: cc.Node = undefined;

    @property(cc.Label)
    progerss: cc.Label = undefined;

    tempDrawPoints: cc.Vec2[] = [];
    /* 多边形,计算百分比使用 */
    private polygonPointsList: any[] = [];

    onLoad() {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this._touchStart.bind(this), this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove.bind(this), this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this._touchEnd.bind(this), this);

        for (let x = 0; x < this.ticketNode.width; x += CLEAR_LINE_WIDTH) {
            for (let y = 0; y < this.ticketNode.height; y += CLEAR_LINE_WIDTH) {
                this.polygonPointsList.push({
                    rect: cc.rect(x - this.ticketNode.width / 2, y - this.ticketNode.height / 2, CLEAR_LINE_WIDTH, CLEAR_LINE_WIDTH),
                    isHit: false
                })
            }
        }
    }

    _touchStart(event: Touch) {
        let point = this.ticketNode.convertToNodeSpaceAR(event.getLocation());
        this.clearMask(point);
    }

    _touchMove(event) {
        let point = this.ticketNode.convertToNodeSpaceAR(event.getLocation());
        this.clearMask(point);
    }

    _touchEnd(event) {
        this.tempDrawPoints.splice(0);
    }

    clearMask(pos) {
        let mask: any = this.maskNode.getComponent(cc.Mask);
        let stencil = mask._graphics;
        const len = this.tempDrawPoints.length;
        this.tempDrawPoints.push(pos);

        if (len <= 1) {
            // 只有一个点，用圆来清除涂层
            stencil.circle(pos.x, pos.y, CLEAR_LINE_WIDTH / 2);
            this.jugementInterset(pos);
            stencil.fill();

        } else {
            // 存在多个点，用线段来清除涂层
            let prevPos = this.tempDrawPoints[len - 2];
            let curPos = this.tempDrawPoints[len - 1];
            this.jugementIntersection(prevPos, curPos);
            stencil.moveTo(prevPos.x, prevPos.y);
            stencil.lineTo(curPos.x, curPos.y);
            stencil.lineWidth = CLEAR_LINE_WIDTH;
            stencil.lineCap = cc.Graphics.LineCap.ROUND;
            stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
            stencil.strokeColor = cc.color(255, 255, 255, 255);
            stencil.stroke();
        }
    }

    /**
     * 相交点计算
     * @param pos 
     */
    jugementInterset(pos: any) {
        // 记录点所在的格子
        this.polygonPointsList.forEach((item) => {
            if (item.isHit) return;
            const xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
            const yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
            if (xFlag && yFlag) item.isHit = true;
        });
        this.updatePolygonPercent();
    }

    /**
     * 相交线段计算
     * @param prevPos 
     * @param curPos 
     */
    jugementIntersection(prevPos: any, curPos: any) {
        // 记录线段经过的格子
        this.polygonPointsList.forEach((item) => {
            item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
        });
        this.updatePolygonPercent();
    }

    /**
     * 更新刮开百分比
     */
    updatePolygonPercent() {
        let opened: number = 0;
        this.polygonPointsList.forEach((item) => {
            if (item.isHit) {
                opened++;
            }
        });
        let percent: string = (opened / this.polygonPointsList.length * 100).toFixed(0);
        this.progerss.string = `已经刮开了 ${percent}%`;
    }

    /**
     * 重置
     */
    resetBtn() {
        this.polygonPointsList.splice(0);
        let mask: any = this.maskNode.getComponent(cc.Mask);
        mask._graphics.clear();

        this.tempDrawPoints = [];
        this.polygonPointsList = [];
        this.progerss.string = '已经刮开了 0%';

        // 生成小格子，用来辅助统计涂层的刮开比例
        for (let x = 0; x < this.ticketNode.width; x += CLEAR_LINE_WIDTH) {
            for (let y = 0; y < this.ticketNode.height; y += CLEAR_LINE_WIDTH) {
                this.polygonPointsList.push({
                    rect: cc.rect(x - this.ticketNode.width / 2, y - this.ticketNode.height / 2, CLEAR_LINE_WIDTH, CLEAR_LINE_WIDTH),
                    isHit: false
                });
            }
        }

    }
}
