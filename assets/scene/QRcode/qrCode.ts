import QRCode = require("./LBQRCode.js");
const { ccclass, property } = cc._decorator;
/**
 * 绘制二维码组件,节点上必须挂在cc.Graphics组件
 */
@ccclass
export default class QRCodes extends cc.Component {
    start() {
        this.setContent("https://www.thinbug.com/q/48589785");
    }
    public setContent(value: string) {
        var qrcode = new QRCode(-1, 1); // var QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
        qrcode.addData(value);
        qrcode.make();

        let num = qrcode.getModuleCount();//横竖排点的个数
        var gg = this.node.getComponent(cc.Graphics);
        gg.clear();
        // compute tileW/tileH based on node width and height
        let wh = Math.round(this.node.width / num)
        if (wh < 2) wh = 2
        if (wh > 4) wh = 4
        let offx = Math.round(wh * num / 2)
        gg.fillColor = cc.Color.WHITE;
        gg.rect(-offx - wh, -offx - wh, (num + 2) * wh, (num + 2) * wh);//左下角是(0,0)点
        gg.fill();
        // draw in the Graphics
        for (var row = 0; row < num; row++) {
            for (var col = 0; col < num; col++) {
                if (qrcode.isDark(row, col)) {
                    gg.fillColor = cc.Color.BLACK;
                    gg.rect(-offx + col * wh, -offx + row * wh, wh, wh);
                    gg.fill();
                } else {
                    gg.fillColor = cc.Color.WHITE;
                    gg.rect(-offx + col * wh, -offx + row * wh, wh, wh);
                    gg.fill();
                }
            }
        }
    }
}
