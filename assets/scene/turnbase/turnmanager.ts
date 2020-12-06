import turnbaseconfig from "./config";
import turnmain from "./turnmain";
const { ccclass, property } = cc._decorator;

export enum PlayerType {
    hero = 0,
    enemy = 1,
}

export interface POS {
    x: number;
    y: number;
}

@ccclass
export default class turnmanager {

    private static _inst: turnmanager;
    public static get Inst(): turnmanager {
        if (!this._inst) {
            this._inst = new turnmanager();
        }
        return this._inst;
    }
    private tMain: turnmain;

    init(tM: turnmain) {
        this.tMain = tM;
    }

    /**
     * 获取角色所在坐标
     * @param type 敌人，玩家
     * @param index 角色编号
     */
    getplayerPos(type: number, index: number): POS {
        let p: POS = { x: 0, y: 0 };
        let list = turnbaseconfig.enemy;
        if (type == PlayerType.hero) {
            list = turnbaseconfig.family;
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i].index == index) {
                p.x = list[i].gridX * turnbaseconfig.wid;
                p.y = list[i].gridY * turnbaseconfig.wid;
                return p;
            }
        }
        return p;
    }
}
