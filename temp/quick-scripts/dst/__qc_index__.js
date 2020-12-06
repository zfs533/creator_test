
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scene/Home/Back');
require('./assets/scene/Home/Home');
require('./assets/scene/apath/pdraw');
require('./assets/scene/apath/pitem');
require('./assets/scene/apath/pmain');
require('./assets/scene/apath/ppath');
require('./assets/scene/apath/ppath_debug');
require('./assets/scene/ballbattle/ball');
require('./assets/scene/ballbattle/ballManager');
require('./assets/scene/ballbattle/ballbattle');
require('./assets/scene/handle/handle');
require('./assets/scene/scrollview/scrollview_h');
require('./assets/scene/scrollview/scrollview_v');
require('./assets/scene/turnbase/config');
require('./assets/scene/turnbase/enemy');
require('./assets/scene/turnbase/hero');
require('./assets/scene/turnbase/playerbase');
require('./assets/scene/turnbase/turnmain');
require('./assets/scene/turnbase/turnmanager');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();