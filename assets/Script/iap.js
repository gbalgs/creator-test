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
        logLable: {
            default: null,
            type: cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.initIAP();
    },

    // update (dt) {},

    initIAP() {
        if ('undefined' == typeof sdkbox || 'undefined' == typeof sdkbox.IAP) {
            this.iapEnable = false;
            return;
        }

        this.log('init IAP');

        let self = this;
        sdkbox.IAP.init();
        sdkbox.IAP.setDebug(true);
        sdkbox.IAP.setListener({
            onSuccess : function (product) {
                //Purchase success
                self.log("Purchase successful: " + product.name);
                // self.logProduct(product);
            },
            onFailure : function (product, msg) {
                //Purchase failed
                //msg is the error message
                self.log("Purchase failed: " + product.name + " error: " + msg);
            },
            onCanceled : function (product) {
                //Purchase was canceled by user
                self.log("Purchase canceled: " + product.name);
            },
            onRestored : function (product) {
                //Purchase restored
                self.log("Restored: " + product.name);
                // self.logProduct(product);
            },
            onProductRequestSuccess : function (products) {
                for (var i = 0; i < products.length; i++) {
                    self.logProduct(products[i]);
                }
            },
            onProductRequestFailure : function (msg) {
                //When product refresh request fails.
                self.log("Failed to get products");
            },
            onShouldAddStorePayment: function(productId) {
                self.log("onShouldAddStorePayment:" + productId);
                return true;
            },
            onFetchStorePromotionOrder : function (productIds, error) {
                self.log("onFetchStorePromotionOrder:" + " " + " e:" + error);
            },
            onFetchStorePromotionVisibility : function (productId, visibility, error) {
                self.log("onFetchStorePromotionVisibility:" + productId + " v:" + visibility + " e:" + error);
            },
            onUpdateStorePromotionOrder : function (error) {
                self.log("onUpdateStorePromotionOrder:" + error);
            },
            onUpdateStorePromotionVisibility : function (error) {
                self.log("onUpdateStorePromotionVisibility:" + error);
            },
        });
        this.iapEnable = true;

    },

    log(text) {
        console.log(text)
        this.logLable.string = text;
    },

    logProduct(p) {
        let t = 'Product: ' + p.name + ' ' + p.title + ' ' + p.description
            + ' ' + p.price + ' ' + p.priceValue + ' ' + p.currencyCode + ' ' + p.receipt
            + ' ' + p.receiptCipheredPayload + ' ' + p.transactionID;

        this.log(t);
    },

    onIAPRefreshButton() {
        if (!this.iapEnable) {
            return;
        }
        this.log('onIAPRefreshButton');
        sdkbox.IAP.refresh();
    },

    onIAPRestoreButton() {
        if (!this.iapEnable) {
            return;
        }
        this.log('onIAPRestoreButton');
        sdkbox.IAP.restore();
    },

    onIAPPurchaseButton() {
        if (!this.iapEnable) {
            return;
        }
        this.log('onIAPPurchaseButton');
        sdkbox.IAP.purchase('remove_ads');
    },

});
