const { ccclass, property } = cc._decorator;

@ccclass
export default class Home extends cc.Component {

    on_clicked(event, info) {
        cc.director.loadScene(info);
        // switch (info) {
        //     case "scrollview":
        //         cc.director.loadScene("scrollview");
        //         break;
        //     case "astar":
        //         cc.director.loadScene("astar");
        //         break;
        //     case "handle":
        //         cc.director.loadScene("handle");
        //         break;
        //     case "turnbase":
        //         cc.director.loadScene("turnbase");
        //         break;
        //     case "ballbattle":
        //         cc.director.loadScene("ballbattle");
        //         break;
        // }
    }
}
