"use strict";
cc._RF.push(module, 'ae3fb+gmZJLGJms790tVa3w', 'Home');
// scene/Home/Home.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.on_clicked = function (event, info) {
        switch (info) {
            case "scrollview":
                cc.director.loadScene("scrollview");
                break;
            case "astar":
                cc.director.loadScene("astar");
                break;
            case "handle":
                cc.director.loadScene("handle");
                break;
            case "turnbase":
                cc.director.loadScene("turnbase");
                break;
            case "ballbattle":
                cc.director.loadScene("ballbattle");
                break;
        }
    };
    Home = __decorate([
        ccclass
    ], Home);
    return Home;
}(cc.Component));
exports.default = Home;

cc._RF.pop();