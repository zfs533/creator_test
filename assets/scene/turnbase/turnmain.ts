import turnbaseconfig, { user } from "./config";
import Enemy from "./enemy";
import Hero from "./hero";
import playerbase from "./playerbase";
import turnmanager, { PlayerType } from "./turnmanager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class turnmain extends cc.Component {
    @property(cc.Prefab)
    heroPre: cc.Prefab = null;

    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;

    private familyList: cc.Node[] = [];
    private enemyList: cc.Node[] = [];

    onLoad() {
        turnbaseconfig.init();
        turnmanager.Inst.init(this);
    }

    async start() {
        await this.layoutHero(turnbaseconfig.family);
        await this.layoutHero(turnbaseconfig.enemy);
        this.startPlay(this.familyList[0], PlayerType.hero);
    }

    async layoutHero(list: user[]) {
        return new Promise(resolve => {
            for (let i = 0; i < list.length; i++) {
                let hero: cc.Node = null;
                if (list[i].type == 0) {
                    hero = cc.instantiate(this.heroPre);
                    this.familyList.push(hero);
                }
                else {
                    hero = cc.instantiate(this.enemyPre);
                    this.enemyList.push(hero);
                }
                hero.getComponent(playerbase).setBaseInfo(list[i]);
                hero.setPosition(list[i].gridX * turnbaseconfig.wid, list[i].gridY * turnbaseconfig.wid);
                this.node.addChild(hero);
            }
            resolve();
        });
    }

    /**
     * 开始战斗
     * @param player 
     * @param type 
     */
    startPlay(player: cc.Node, type: number) {
        if (type == PlayerType.hero) {
            player.getComponent(Hero).play((data: user) => {
                this.startPlay(this.enemyList[data.index], PlayerType.enemy);
            });
        }
        else {
            player.getComponent(Enemy).play((data: user) => {
                let idx = data.index + 1 <= 4 ? data.index + 1 : 0;
                this.startPlay(this.familyList[idx], PlayerType.hero);
            });
        }
    }
}
