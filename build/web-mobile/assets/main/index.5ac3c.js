window.__require=function t(e,n,r){function o(c,s){if(!n[c]){if(!e[c]){var h=c.split("/");if(h=h[h.length-1],!e[h]){var u="function"==typeof __require&&__require;if(!s&&u)return u(h,!0);if(i)return i(h,!0);throw new Error("Cannot find module '"+c+"'")}c=h}var a=n[c]={exports:{}};e[c][0].call(a.exports,function(t){return o(e[c][1][t]||t)},a,a.exports,t,e,n,r)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)o(r[c]);return o}({Back:[function(t,e,n){"use strict";cc._RF.push(e,"513760dvDtGw7OWD6mOYEbX","Back");var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){cc.director.loadScene("home")})},e=o([c],e)}(cc.Component));n.default=s,cc._RF.pop()},{}],Home:[function(t,e,n){"use strict";cc._RF.push(e,"ae3fb+gmZJLGJms790tVa3w","Home");var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.on_clicked=function(t,e){switch(e){case"scrollview":cc.director.loadScene("scrollview")}},e=o([c],e)}(cc.Component));n.default=s,cc._RF.pop()},{}],screenAdapter:[function(t,e,n){"use strict";cc._RF.push(e,"97210MvlJVKqqeVujYRWFXd","screenAdapter");var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator.ccclass,c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){var t=this;cc.view.setResizeCallback(function(){return t.onResize()})},e.prototype.start=function(){this.adapt()},e.prototype.onResize=function(){this.adapt()},e.prototype.adapt=function(){var t=cc.winSize.width/cc.winSize.height,e=cc.Canvas.instance.designResolution.width/cc.Canvas.instance.designResolution.height;t<=1&&t<=e?this.setFitWidth():this.setFitHeight()},e.prototype.setFitHeight=function(){cc.Canvas.instance.fitHeight=!0,cc.Canvas.instance.fitWidth=!1},e.prototype.setFitWidth=function(){cc.Canvas.instance.fitHeight=!1,cc.Canvas.instance.fitWidth=!0},e=o([i],e)}(cc.Component);n.default=c,cc._RF.pop()},{}],scrollview_h:[function(t,e,n){"use strict";cc._RF.push(e,"3c037FDp/lGRIb6sA6UFF1z","scrollview_h");var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},i=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n(function(e){e(t)})}return new(n||(n=Promise))(function(n,i){function c(t){try{h(r.next(t))}catch(t){i(t)}}function s(t){try{h(r.throw(t))}catch(t){i(t)}}function h(t){t.done?n(t.value):o(t.value).then(c,s)}h((r=r.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return h([t,e])}}function h(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,h=s.ccclass,u=s.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.item_h=void 0,e.content_hor=void 0,e.scrollview_hor=void 0,e.viewWidth=0,e.contentOringinX=0,e.count=0,e.childNum_hor=8,e.itemArr_hor=[],e.posArr_hor=[],e.length_hor=100,e}return r(e,t),e.prototype.start=function(){return i(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.init()];case 1:return t.sent(),this.setData_hor(),[2]}})})},e.prototype.init=function(){return i(this,void 0,void 0,function(){var t=this;return c(this,function(e){return[2,new Promise(function(e){return i(t,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return this.item_h.active=!1,this.viewWidth=this.content_hor.width,this.contentOringinX=Math.floor(this.content_hor.x),this.scrollview_hor.node.on("scrolling",this.handleScroling_hor,this),[4,this.initList_hor()];case 1:return t.sent(),e(),[2]}})})})]})})},e.prototype.initList_hor=function(){return i(this,void 0,void 0,function(){var t=this;return c(this,function(e){return[2,new Promise(function(e){return i(t,void 0,void 0,function(){var t,n,r,o;return c(this,function(i){if(this.content_hor.childrenCount<1)for(t=0,n=0;n<this.childNum_hor;n++)(r=cc.instantiate(this.item_h)).active=!0,r.getChildByName("lb").getComponent(cc.Label).string=n+"",t+=r.width,o=new cc.Vec2(r.width/2+r.width*n,0),r.setPosition(o),this.content_hor.addChild(r),this.itemArr_hor.push(r),this.resetContentSize_hor(t);return e(),[2]})})})]})})},e.prototype.resetContentSize_hor=function(t){t>this.viewWidth&&this.content_hor.setContentSize(t,this.content_hor.height)},e.prototype.setData_hor=function(){for(var t=0,e=0;e<this.length_hor;e++){t+=this.item_h.width;var n=new cc.Vec2(this.item_h.width/2+this.item_h.width*e,0);this.posArr_hor.push(n)}this.resetContentSize_hor(t)},e.prototype.handleScroling_hor=function(){if(!(this.itemArr_hor.length*this.item_h.width<this.viewWidth)){var t=Math.floor(this.content_hor.x),e=this.contentOringinX-t,n=Math.floor(e/this.item_h.width);if(!(n<0||n+this.itemArr_hor.length>this.posArr_hor.length||n==this.count)){this.count=n;for(var r=n;r<n+this.itemArr_hor.length;r++){var o=this.itemArr_hor[r-n];o.getChildByName("lb").getComponent(cc.Label).string=r+"",o.x=this.posArr_hor[r].x}}}},o([u(cc.Node)],e.prototype,"item_h",void 0),o([u(cc.Node)],e.prototype,"content_hor",void 0),o([u(cc.ScrollView)],e.prototype,"scrollview_hor",void 0),o([u()],e.prototype,"length_hor",void 0),e=o([h],e)}(cc.Component);n.default=a,cc._RF.pop()},{}],scrollview_v:[function(t,e,n){"use strict";cc._RF.push(e,"4435dcP1CdJ364Ze2Y7P8CL","scrollview_v");var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},i=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n(function(e){e(t)})}return new(n||(n=Promise))(function(n,i){function c(t){try{h(r.next(t))}catch(t){i(t)}}function s(t){try{h(r.throw(t))}catch(t){i(t)}}function h(t){t.done?n(t.value):o(t.value).then(c,s)}h((r=r.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return h([t,e])}}function h(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,h=s.ccclass,u=s.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.item_v=void 0,e.content_ver=void 0,e.scrollview_ver=void 0,e.viewHeight=0,e.contentOringinY=0,e.count=0,e.childNum_ver=12,e.itemArr_ver=[],e.posArr_ver=[],e.length_ver=100,e}return r(e,t),e.prototype.start=function(){return i(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.init()];case 1:return t.sent(),this.setData_ver(),[2]}})})},e.prototype.init=function(){return i(this,void 0,void 0,function(){var t=this;return c(this,function(e){return[2,new Promise(function(e){return i(t,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return this.item_v.active=!1,this.viewHeight=this.content_ver.height,this.contentOringinY=Math.floor(this.content_ver.y),this.scrollview_ver.node.on("scrolling",this.handleScroling_ver,this),[4,this.initList_ver()];case 1:return t.sent(),e(),[2]}})})})]})})},e.prototype.initList_ver=function(){return i(this,void 0,void 0,function(){var t=this;return c(this,function(e){return[2,new Promise(function(e){return i(t,void 0,void 0,function(){var t,n,r,o;return c(this,function(i){if(this.content_ver.childrenCount<1)for(t=0,n=0;n<this.childNum_ver;n++)(r=cc.instantiate(this.item_v)).active=!0,r.getChildByName("lb").getComponent(cc.Label).string=n+"",t+=r.height,o=new cc.Vec2(0,-r.height/2-r.height*n),r.setPosition(o),this.content_ver.addChild(r),this.itemArr_ver.push(r),this.resetContentSize_ver(t);return e(),[2]})})})]})})},e.prototype.resetContentSize_ver=function(t){t>this.viewHeight&&this.content_ver.setContentSize(this.content_ver.width,t)},e.prototype.setData_ver=function(){for(var t=0,e=0;e<this.length_ver;e++){t+=this.item_v.height;var n=new cc.Vec2(0,-this.item_v.height/2-this.item_v.height*e);this.posArr_ver.push(n)}this.resetContentSize_ver(t)},e.prototype.handleScroling_ver=function(){if(!(this.itemArr_ver.length*this.item_v.height<this.viewHeight)){var t=Math.floor(this.content_ver.y)-this.contentOringinY,e=Math.floor(t/this.item_v.height);if(!(e<0||e+this.itemArr_ver.length>this.posArr_ver.length||e==this.count)){this.count=e;for(var n=e;n<e+this.itemArr_ver.length;n++){var r=this.itemArr_ver[n-e];r.getChildByName("lb").getComponent(cc.Label).string=n+"",r.y=this.posArr_ver[n].y}}}},o([u(cc.Node)],e.prototype,"item_v",void 0),o([u(cc.Node)],e.prototype,"content_ver",void 0),o([u(cc.ScrollView)],e.prototype,"scrollview_ver",void 0),o([u()],e.prototype,"length_ver",void 0),e=o([h],e)}(cc.Component);n.default=a,cc._RF.pop()},{}]},{},["Back","Home","screenAdapter","scrollview_h","scrollview_v"]);