cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        fbLoginText: {
            default: null,
            type: cc.Label
        }
    },

    showLog: function (text) {
        this.label.string = text;
    },

    // use this for initialization
    onLoad: function () {
        this.showLog(this.text);

        if (cc.sys.isMobile) {
            this.testSdkbox();
        }
    },

    // called every frame
    update: function (dt) {

    },

    testSdkbox: function () {
        this.testFB();
        this.testAdMob();
        this.testUnityAds();
        this.testReview();
        this.testShare();
        this.testGoogleAnalytics();
    },

    // facebook begin
    testFB: function () {
        var self = this;

        sdkbox.PluginFacebook.init();
        sdkbox.PluginFacebook.setListener({
            onLogin: function(isLogin, msg) {
              if (isLogin) {
                self.showLog("login successful");
              } else {
                self.showLog("login failed");
              }
            },
            onSharedSuccess: function (msg) {
                self.showLog(msg);
                self.fbLoginText.string = "logout";
            },
            onSharedFailed: function (message) {
                self.showLog(msg);
                self.fbLoginText.string = "login";
            },
            onGetUserInfo: function (user) {
                self.showLog("onGetUserInfo");

                console.log("Facebook > ", user.first_name);
                console.log("Facebook > ", user.id);
                console.log("Facebook > ", user.installed);
                console.log("Facebook > ", user.is_silhouette);
                console.log("Facebook > ", user.last_name);
                console.log("Facebook > ", user.name);
                console.log("Facebook > ", user.picture);
                console.log("Facebook > ", user.picture_url);
                console.log("Facebook > ", user.score);
            },
            onAPI: function (key, jsonData) {
                self.showLog(key + jsonData);
            },
            onFetchFriends: function (ok, msg) {
                self.showLog("onFetchFriends" + msg);
            },
            onPermission: function (isLogin, msg) {
                self.showLog("onPermission" + msg);
            }
        });
        if (sdkbox.PluginFacebook.isLoggedIn()) {
            this.fbLoginText.string = "logout";
        } else {
            this.fbLoginText.string = "login";
        }
    },
    clickFBLogin: function () {
        console.log("Facebook > clickFBLogin")

        if (sdkbox.PluginFacebook.isLoggedIn()) {
            this.PluginFacebook.logout();
        } else {
            sdkbox.PluginFacebook.login();
        }
    },
    clickFBLogout: function () {
        console.log("Facebook > clickFBLogout")
        sdkbox.PluginFacebook.logout();
    },
    clickFBShareLink: function () {
        console.log("Facebook > clickFBShareLink");

        var info = new Object();
        info.type  = "link";
        info.link  = "http://www.cocos2d-x.org";
        info.title = "cocos2d-x";
        info.text  = "Best Mobile Game Engine";
        info.image = "http://cocos2d-x.org/images/logo.png";
        sdkbox.PluginFacebook.share(info);
    },
    clickFBDialogLink: function () {
        console.log("Facebook > clickFBDialogLink");

        var info = new Object();
        info.type  = "link";
        info.link  = "http://www.cocos2d-x.org";
        info.title = "cocos2d-x";
        info.text  = "Best Mobile Game Engine";
        info.image = "http://cocos2d-x.org/images/logo.png";
        sdkbox.PluginFacebook.dialog(info);
    },
    clickFBInviteFriends: function () {
        sdkbox.PluginFacebook.inviteFriends(
         "https://fb.me/322164761287181",
         "http://www.cocos2d-x.org/attachments/801/cocos2dx_portrait.png");
    },
    clickFBGraphAPI: function () {
        var params = new Object();
        sdkbox.PluginFacebook.api("/me/friendlists", "GET", params, "/me/friendlists");

    },
    // Facebook end

    // AdMob
    testAdMob: function () {
        var self = this;
        self.gameover = false;
        self.next_level = false;
        self.rewarded = false;
        sdkbox.PluginAdMob.init();
        sdkbox.PluginAdMob.setListener({
            adViewDidReceiveAd : function(name) {
                self.showLog("AdMob adViewDidReceiveAd " + name);

                if (name == "gameover") {
                    if (self.gameover) return ;
                    self.gameover = true;
                } else if (name == "next_level") {
                    if (self.next_level) return ;
                    self.next_level = true;
                } else if (name == "rewarded") {
                    if (self.rewarded) return;
                    self.rewarded = true;
                }

                sdkbox.PluginAdMob.show(name);
            },
            adViewDidFailToReceiveAdWithError : function(name, msg) {
                self.showLog("AdMob adViewDidFailToReceiveAdWithError " + name);
            },
            adViewWillPresentScreen : function(name) {
                self.showLog("AdMob adViewWillPresentScreen " + name);
            },
            adViewDidDismissScreen : function(name) {
                self.showLog("AdMob adViewDidDismissScreen " + name);
            },
            adViewWillDismissScreen : function(name) {
                self.showLog("AdMob adViewWillDismissScreen " + name);
            },
            adViewWillLeaveApplication : function(name) {
                self.showLog("AdMob adViewWillLeaveApplication " + name);
            }
        });
    },
    clickShowAdMobBanner: function () {
        sdkbox.PluginAdMob.show("home");
    },
    clickShowAdMobInterstital: function () {
        sdkbox.PluginAdMob.show("gameover");
    },
    clickShowAdMobVideo: function () {
        sdkbox.PluginAdMob.show("rewarded");
    },
    clickHideAdMobBanner: function () {
        sdkbox.PluginAdMob.hide("home");
    },
    clickHideAdMobInterstital: function () {
        sdkbox.PluginAdMob.hide("gameover");
    },
    clickHideAdMobVideo: function () {
        sdkbox.PluginAdMob.hide("rewarded");
    },

    // unity ads
    testUnityAds: function () {
        var self = this;
        var plugin = sdkbox.PluginUnityAds
        plugin.setListener({
            unityAdsDidClick: function(placementId) {
                self.showLog('unityAdsDidClick ' + placementId);
            },
            unityAdsPlacementStateChanged: function(placementId, oldState, newState) {
                self.showLog('unityAdsPlacementStateChanged:' + placementId + ' oldState:' + oldState + " newState:" + newState);
            },
            unityAdsReady: function(placementId) {
                self.showLog('unityAdsReady ' + placementId);
            },
            unityAdsDidError: function(error, message) {
                self.showLog('unityAdsDidError:' + error + ' message:' + message);
            },
            unityAdsDidStart: function(placementId) {
                self.showLog('unityAdsDidStart=' + placementId);
            },
            unityAdsDidFinish: function(placementId, state) {
                self.showLog('unityAdsDidFinish ' + placementId + ' state:' + state);
            }
        })
        plugin.init();

    },
    clickShowUnityAds: function () {
        var self = this;
        const placementId = '';
        if (sdkbox.PluginUnityAds.isReady(placementId)) {
            sdkbox.PluginUnityAds.show(placementId);
        } else {
            self.showLog('unityads is not ready');
        }
    },

    // review
    testReview: function () {
        var self = this;
        var plugin = sdkbox.PluginReview
        plugin.setListener({
          onDisplayAlert: function(data) {self.showLog("Review: didDisplayAlert")},
          onDeclineToRate: function(data) { self.showLog("Review: didDeclineToRate") },
          onRate: function(data) { self.showLog("Review: didToRate") },
          onRemindLater: function(data) { self.showLog("Review: didToRemindLater") }
        })
        plugin.init();
    },
    clickReview: function () {
        // sdkbox.PluginReview.setTitle("custom title");
        // sdkbox.PluginReview.setMessage("custom message");
        // sdkbox.PluginReview.setCancelButtonTitle("custom cancel");
        // sdkbox.PluginReview.setRateButtonTitle("custom rate");
        // sdkbox.PluginReview.setRateLaterButtonTitle("custom rate later");
        sdkbox.PluginReview.show(true);
    },

    // share
    testShare: function () {
        var self = this;
        var plugin = sdkbox.PluginShare
        plugin.setListener({
            onShareState: function(response) {
                self.showLog("PluginShare onSharestate:" + response.state + " error:" + response.error)
                if (response.state == sdkbox.SocialShareState.SocialShareStateSuccess) {
                    self.showLog("post success")
                }
            }
        })
        plugin.init();
    },
    clickShare: function () {
        var shareInfo = {};
        shareInfo.text = "#sdkbox(www.sdkbox.com) - the cure for sdk fatigue - from js - ";
        shareInfo.title = "sdkbox";
        //shareInfo.image = "path/to/image";
        shareInfo.link = "http://www.sdkbox.com";
        shareInfo.showDialog = false; //if you want share with dialog，set the value true

        //sdkbox.SocialPlatform.Platform_Select will show platforms list, let user select which platform want to share
        //sdkbox.SocialPlatform.Platform_Twitter will share with twitter directly
        //sdkbox.SocialPlatform.Platform_Facebook will share with facebook directly
        shareInfo.platform = sdkbox.SocialPlatform.Platform_Select;
        sdkbox.PluginShare.share(shareInfo);
    },
    clickNativeShare: function () {
        var shareInfo = {};
        shareInfo.text = "#sdkbox(www.sdkbox.com) - the cure for sdk fatigue ";
        shareInfo.title = "sdkbox";
        //shareInfo.image = "path/to/image"
        shareInfo.link = "http://www.sdkbox.com";
        sdkbox.PluginShare.nativeShare(shareInfo);

        // the follow property will be ignored in nativeShare
        //shareInfo.showDialog = false;
        //shareInfo.platform = sdkbox.SocialPlatform.Platform_Select;
        // sdkbox.PluginShare.nativeShare(shareInfo);
    },

    // googleanalytics
    testGoogleAnalytics: function () {
        sdkbox.PluginGoogleAnalytics.init();

        const ecommerceInfo = {
            // transaction info
            action: 'purchase',
            transaction: 'T12345',
            affiliation: 'Google Store - Online',
            transactionCouponCode: 'SUMMER2017',
            revenue: '37.39',
            tax: '2.85',
            shipping: '5.34',

            // product info
            productID: 'P12345',
            productName: 'Android Warhol T-Shirt',
            category: 'Apparel/T-Shirts',
            brand: 'SDKBox',
            productVariant: 'black',
            productCouponCode: 'APPARELSALE',
            price: '29.20',
            quantity: '1',

            // currency code
            // https://support.google.com/analytics/answer/6205902?#supported-currencies
            currencyCode: 'EUR'
        };
        sdkbox.PluginGoogleAnalytics.logECommerce(ecommerceInfo);


        const ecommerceInfo = {
            // transaction info
            action: 'refund',
            transaction: 'T12345',
        };
        sdkbox.PluginGoogleAnalytics.logECommerce(ecommerceInfo);

        const ecommerceInfo = {
            // transaction info
            action: 'refund',
            transaction: 'T12345',

            // product info
            productID: 'P12345',
            quantity: '1',
        };
        sdkbox.PluginGoogleAnalytics.logECommerce(ecommerceInfo);
    }


});
