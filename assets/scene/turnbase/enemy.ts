import playerbase from "./playerbase";
import { user } from "./config";
import turnmanager, { PlayerType, POS } from "./turnmanager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Enemy extends playerbase {

    public play(callbk: Function) {
        let pos: POS = turnmanager.Inst.getplayerPos(PlayerType.hero, this.data.index);
        this.gotoPlay(new cc.Vec2(pos.x, pos.y), -90, callbk);
    }
}
