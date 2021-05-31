import JumpPlayer from "./jumpPlayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoadCloud extends cc.Component {

    start(){
        let size = this.node.getContentSize()
        console.log(size.width,size.height)
    }

    checkPlayerStandUp(player:JumpPlayer):boolean{
        let x:number = player.node.x;
        let y:number = player.node.y;
        let rect:cc.Rect = this.getRoadRect();
        let bool:boolean = rect.contains(cc.v2(x,y));
        if(bool&&y>=this.node.y){
            return true;
        }
        
        return false;
    }

    getRoadRect():cc.Rect{
        return cc.rect(this.node.x-this.node.width/2,this.node.y-this.node.height/2,this.node.width,this.node.height);
    }

    getPlayerPosY():number{
        return this.node.y+this.node.height/2;
    }
}
