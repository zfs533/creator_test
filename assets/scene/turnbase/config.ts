export interface user {
    index: number;
    name: string;
    sex: number;
    type: number;//0:family,1:enemy
    //位置
    gridX: number;
    gridY: number;
    //血量
    blood: number;
    //技能
    skill1: number;
    skill2: number;
    skill3: number;

}
export default class turnbaseconfig {
    public static family: user[] = [];
    public static enemy: user[] = [];
    public static wid: number = 50;
    public static init() {
        this.family.splice(0);
        this.enemy.splice(0);
        this.tempGridArr.splice(0);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 2; j++) {
                let player: user = this.getUserData(j, i);
                player.name = `角色 ${i}`;
                player.index = i;
                if (j == 0) {
                    this.family.push(player);
                }
                else {
                    this.enemy.push(player);
                }
            }
        }
    }

    private static getUserData(type: number): user {
        let userData: user = {
            index: 0,
            name: "",
            sex: 0,
            type: type,
            //位置
            gridX: 0,
            gridY: 0,
            //血量
            blood: 100 * Math.random() * 1000,
            //技能
            skill1: 0,
            skill2: 0,
            skill3: 0,
        }
        if (type == 0) {
            let pos = this.getGridXY(1, 2);
            userData.gridX = pos.x;//Math.floor(Math.random() * 8) + 1;
            userData.gridY = pos.y;//Math.floor(Math.random() * 10) + 2;
        }
        else {
            let pos = this.getGridXY(10, 2);
            userData.gridX = pos.x;//Math.floor(Math.random() * 8) + 10;
            userData.gridY = pos.y;//Math.floor(Math.random() * 10) + 2;
        }
        return userData;
    }

    /**
     *  生成网格坐标
     *  解决连个点在同一个坐标
     * @private
     * @static
     * @type {any[]}
     * @memberof turnbaseconfig
     */
    private static tempGridArr: any[] = [];//[{x:,y:}]
    public static getGridXY(offsetX: number, offsetY: number) {
        let x = Math.floor(Math.random() * 8) + offsetX;
        let y = Math.floor(Math.random() * 10) + offsetY;
        for (let i = 0; i < this.tempGridArr.length; i++) {
            if (x == this.tempGridArr[i].x && y == this.tempGridArr[i].y) {
                this.getGridXY(offsetX, offsetY);
                break;
            }
        }
        this.tempGridArr.push({ x: x, y: y });
        return { x: x, y: y };
    }
}