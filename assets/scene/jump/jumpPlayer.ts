import RoadCloud from "./roadCloud";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JumpPlayer extends cc.Component {
    private gravitySpeed:number = 0;
    private gravityNormal:number = 0.3;

    @property([cc.Node])
    roadCloudArr:cc.Node[] = [];

    start(){
        this.schedule(()=>{
            this.startJump();
        },2);
    }

    update(){
        this.gravitySpeed+=this.gravityNormal;
        this.node.y -= this.gravitySpeed;
        this.checkStandRoadCloud();
    }

    checkStandRoadCloud(){
        for(let i = 0; i<this.roadCloudArr.length;i++){
            let roadCloud:cc.Node = this.roadCloudArr[i];
            let rc:RoadCloud = roadCloud.getComponent(RoadCloud);
            let isStand = rc.checkPlayerStandUp(this);
            if(isStand&&this.gravitySpeed>=0){
                this.node.y = rc.getPlayerPosY();
                this.gravitySpeed = this.gravityNormal;
                return;
            }
        }
    }

    startJump(){
        this.gravitySpeed = -8;
    }
}
