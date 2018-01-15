// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        statusLabel: {
            default: null,
            type: cc.Label
        },
        logLabel: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.initAdcolony();
    },

    // update (dt) {},

    initAdcolony() {
        if ('undefined' == typeof sdkbox || 'undefined' == typeof sdkbox.PluginAdColony) {
            this.log('AdColony is disable');
            this.AdColonyEnable = false;
            return;
        }

        this.log('init AdColony');

        let self = this;
        sdkbox.PluginAdColony.init();
        sdkbox.PluginAdColony.setListener({
            onAdColonyChange : function (data, available) {
                // Called when AdColony finish loading
                self.log("onAdColonyChange");
                // dump(data);
                self.statusLabel.string = "Status: onAdColonyChange " + data["name"];
            },
            onAdColonyReward : function (data, currencyName, amount, success) {
                // Called when AdColony v4vc ad finish playing
                self.log("onAdColonyReward "
                    + currencyName.toString()
                    + amount.toString()
                    + success.toString());
                // dump(data);
            },
            onAdColonyStarted : function (data) {
                // Called when ad starts playing
                self.log("onAdColonyStarted");
                // dump(data);
            },
            onAdColonyFinished : function (data) {
                // Called when an ad finish displaying
                self.log("onAdColonyFinished");
                // dump(data);
            }
        });

        this.AdColonyEnable = true;
    },

    log(text) {
        console.log(text)
        this.logLabel.string = text;
    },

    onAdcolonyShowAdButton() {
        if (!this.AdColonyEnable) {
            this.log('AdColony is disable');
            return;
        }
        this.log('onAdcolonyShowAdButton');

        sdkbox.PluginAdColony.show("video");
    },

    onAdcolonyShowV4VCButton() {
        if (!this.AdColonyEnable) {
            this.log('AdColony is disable');
            return;
        }
        this.log('onAdcolonyShowV4VCButton');

        sdkbox.PluginAdColony.show("v4vc");
    },



});
