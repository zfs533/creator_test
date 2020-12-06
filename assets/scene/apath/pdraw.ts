const { ccclass, property } = cc._decorator;
@ccclass
export default class pdraw extends cc.Component {

    private wid: number = 50;
    start() {
        this.graphicsLine()
    }

    /**
     * 画一个背景网格
     */
    graphicsLine() {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        let hor = Math.floor(width / this.wid) + 5;
        let ver = Math.floor(height / this.wid) + 5;
        for (let i = 0; i < ver; i++) {
            let line: cc.Node = new cc.Node();
            this.node.addChild(line);
            line.addComponent(cc.Graphics);
            let graphics = line.getComponent(cc.Graphics);
            graphics.strokeColor = cc.color(255, 255, 0, 255);
            graphics.lineWidth = 2;
            graphics.moveTo(0, this.wid * i);
            graphics.lineTo(width, this.wid * i);
            graphics.stroke();
            line.zIndex = -1;
        }
        for (let i = 0; i < hor; i++) {
            let line: cc.Node = new cc.Node();
            this.node.addChild(line);
            line.addComponent(cc.Graphics);
            let graphics = line.getComponent(cc.Graphics);
            graphics.strokeColor = cc.color(255, 255, 0, 255);
            graphics.lineWidth = 2;
            graphics.moveTo(this.wid * i, 0);
            graphics.lineTo(this.wid * i, height)
            graphics.stroke();
            line.zIndex = -1;
        }
    }


}
