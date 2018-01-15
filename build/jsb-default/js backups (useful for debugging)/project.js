require = function o(e, n, i) {
function t(l, c) {
if (!n[l]) {
if (!e[l]) {
var d = "function" == typeof require && require;
if (!c && d) return d(l, !0);
if (s) return s(l, !0);
var a = new Error("Cannot find module '" + l + "'");
throw a.code = "MODULE_NOT_FOUND", a;
}
var r = n[l] = {
exports: {}
};
e[l][0].call(r.exports, function(o) {
var n = e[l][1][o];
return t(n || o);
}, r, r.exports, o, e, n, i);
}
return n[l].exports;
}
for (var s = "function" == typeof require && require, l = 0; l < i.length; l++) t(i[l]);
return t;
}({
HelloWorld: [ function(o, e, n) {
"use strict";
cc._RF.push(e, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!",
fbLoginText: {
default: null,
type: cc.Label
}
},
showLog: function(o) {
this.label.string = o;
},
onLoad: function() {
this.showLog(this.text);
cc.sys.isMobile && this.testSdkbox();
},
update: function(o) {},
testSdkbox: function() {
this.testFB();
this.testAdMob();
this.testUnityAds();
this.testReview();
this.testShare();
},
testFB: function() {
var o = this;
sdkbox.PluginFacebook.init();
sdkbox.PluginFacebook.setListener({
onLogin: function(e, n) {
e ? o.showLog("login successful") : o.showLog("login failed");
},
onSharedSuccess: function(e) {
o.showLog(e);
o.fbLoginText.string = "logout";
},
onSharedFailed: function(e) {
o.showLog(msg);
o.fbLoginText.string = "login";
},
onGetUserInfo: function(e) {
o.showLog("onGetUserInfo");
console.log("Facebook > ", e.first_name);
console.log("Facebook > ", e.id);
console.log("Facebook > ", e.installed);
console.log("Facebook > ", e.is_silhouette);
console.log("Facebook > ", e.last_name);
console.log("Facebook > ", e.name);
console.log("Facebook > ", e.picture);
console.log("Facebook > ", e.picture_url);
console.log("Facebook > ", e.score);
},
onAPI: function(e, n) {
o.showLog(e + n);
},
onFetchFriends: function(e, n) {
o.showLog("onFetchFriends" + n);
},
onPermission: function(e, n) {
o.showLog("onPermission" + n);
}
});
sdkbox.PluginFacebook.isLoggedIn() ? this.fbLoginText.string = "logout" : this.fbLoginText.string = "login";
},
clickFBLogin: function() {
console.log("Facebook > clickFBLogin");
sdkbox.PluginFacebook.isLoggedIn() ? this.PluginFacebook.logout() : sdkbox.PluginFacebook.login();
},
clickFBLogout: function() {
console.log("Facebook > clickFBLogout");
sdkbox.PluginFacebook.logout();
},
clickFBShareLink: function() {
console.log("Facebook > clickFBShareLink");
var o = new Object();
o.type = "link";
o.link = "http://www.cocos2d-x.org";
o.title = "cocos2d-x";
o.text = "Best Mobile Game Engine";
o.image = "http://cocos2d-x.org/images/logo.png";
sdkbox.PluginFacebook.share(o);
},
clickFBDialogLink: function() {
console.log("Facebook > clickFBDialogLink");
var o = new Object();
o.type = "link";
o.link = "http://www.cocos2d-x.org";
o.title = "cocos2d-x";
o.text = "Best Mobile Game Engine";
o.image = "http://cocos2d-x.org/images/logo.png";
sdkbox.PluginFacebook.dialog(o);
},
clickFBInviteFriends: function() {
sdkbox.PluginFacebook.inviteFriends("https://fb.me/322164761287181", "http://www.cocos2d-x.org/attachments/801/cocos2dx_portrait.png");
},
clickFBGraphAPI: function() {
var o = new Object();
sdkbox.PluginFacebook.api("/me/friendlists", "GET", o, "/me/friendlists");
},
testAdMob: function() {
var o = this;
o.gameover = !1;
o.next_level = !1;
o.rewarded = !1;
sdkbox.PluginAdMob.init();
sdkbox.PluginAdMob.setListener({
adViewDidReceiveAd: function(e) {
o.showLog("AdMob adViewDidReceiveAd " + e);
if ("gameover" == e) {
if (o.gameover) return;
o.gameover = !0;
} else if ("next_level" == e) {
if (o.next_level) return;
o.next_level = !0;
} else if ("rewarded" == e) {
if (o.rewarded) return;
o.rewarded = !0;
}
sdkbox.PluginAdMob.show(e);
},
adViewDidFailToReceiveAdWithError: function(e, n) {
o.showLog("AdMob adViewDidFailToReceiveAdWithError " + e);
},
adViewWillPresentScreen: function(e) {
o.showLog("AdMob adViewWillPresentScreen " + e);
},
adViewDidDismissScreen: function(e) {
o.showLog("AdMob adViewDidDismissScreen " + e);
},
adViewWillDismissScreen: function(e) {
o.showLog("AdMob adViewWillDismissScreen " + e);
},
adViewWillLeaveApplication: function(e) {
o.showLog("AdMob adViewWillLeaveApplication " + e);
}
});
},
clickShowAdMobBanner: function() {
sdkbox.PluginAdMob.show("home");
},
clickShowAdMobInterstital: function() {
sdkbox.PluginAdMob.show("gameover");
},
clickShowAdMobVideo: function() {
sdkbox.PluginAdMob.show("rewarded");
},
clickHideAdMobBanner: function() {
sdkbox.PluginAdMob.hide("home");
},
clickHideAdMobInterstital: function() {
sdkbox.PluginAdMob.hide("gameover");
},
clickHideAdMobVideo: function() {
sdkbox.PluginAdMob.hide("rewarded");
},
testUnityAds: function() {
var o = this, e = sdkbox.PluginUnityAds;
e.setListener({
unityAdsDidClick: function(e) {
o.showLog("unityAdsDidClick " + e);
},
unityAdsPlacementStateChanged: function(e, n, i) {
o.showLog("unityAdsPlacementStateChanged:" + e + " oldState:" + n + " newState:" + i);
},
unityAdsReady: function(e) {
o.showLog("unityAdsReady " + e);
},
unityAdsDidError: function(e, n) {
o.showLog("unityAdsDidError:" + e + " message:" + n);
},
unityAdsDidStart: function(e) {
o.showLog("unityAdsDidStart=" + e);
},
unityAdsDidFinish: function(e, n) {
o.showLog("unityAdsDidFinish " + e + " state:" + n);
}
});
e.init();
},
clickShowUnityAds: function() {
var o = this;
sdkbox.PluginUnityAds.isReady("") ? sdkbox.PluginUnityAds.show("") : o.showLog("unityads is not ready");
},
testReview: function() {
var o = this, e = sdkbox.PluginReview;
e.setListener({
onDisplayAlert: function(e) {
o.showLog("Review: didDisplayAlert");
},
onDeclineToRate: function(e) {
o.showLog("Review: didDeclineToRate");
},
onRate: function(e) {
o.showLog("Review: didToRate");
},
onRemindLater: function(e) {
o.showLog("Review: didToRemindLater");
}
});
e.init();
},
clickReview: function() {
sdkbox.PluginReview.show(!0);
},
testShare: function() {
var o = this, e = sdkbox.PluginShare;
e.setListener({
onShareState: function(e) {
o.showLog("PluginShare onSharestate:" + e.state + " error:" + e.error);
e.state == sdkbox.SocialShareState.SocialShareStateSuccess && o.showLog("post success");
}
});
e.init();
},
clickShare: function() {
var o = {};
o.text = "#sdkbox(www.sdkbox.com) - the cure for sdk fatigue - from js - ";
o.title = "sdkbox";
o.link = "http://www.sdkbox.com";
o.showDialog = !1;
o.platform = sdkbox.SocialPlatform.Platform_Select;
sdkbox.PluginShare.share(o);
},
clickNativeShare: function() {
var o = {};
o.text = "#sdkbox(www.sdkbox.com) - the cure for sdk fatigue ";
o.title = "sdkbox";
o.link = "http://www.sdkbox.com";
sdkbox.PluginShare.nativeShare(o);
}
});
cc._RF.pop();
}, {} ],
adcolony: [ function(o, e, n) {
"use strict";
cc._RF.push(e, "252a5eQDyNEzI3GzwDTl8R2", "adcolony");
cc.Class({
extends: cc.Component,
properties: {
statusLabel: {
default: null,
type: cc.Label
},
logLabel: {
default: null,
type: cc.Label
}
},
start: function() {
this.initAdcolony();
},
initAdcolony: function() {
if ("undefined" != typeof sdkbox && "undefined" != typeof sdkbox.PluginAdColony) {
this.log("init AdColony");
var o = this;
sdkbox.PluginAdColony.init();
sdkbox.PluginAdColony.setListener({
onAdColonyChange: function(e, n) {
o.log("onAdColonyChange");
o.statusLabel.string = "Status: onAdColonyChange " + e.name;
},
onAdColonyReward: function(e, n, i, t) {
o.log("onAdColonyReward " + n.toString() + i.toString() + t.toString());
},
onAdColonyStarted: function(e) {
o.log("onAdColonyStarted");
},
onAdColonyFinished: function(e) {
o.log("onAdColonyFinished");
}
});
this.AdColonyEnable = !0;
} else {
this.log("AdColony is disable");
this.AdColonyEnable = !1;
}
},
log: function(o) {
console.log(o);
this.logLabel.string = o;
},
onAdcolonyShowAdButton: function() {
if (this.AdColonyEnable) {
this.log("onAdcolonyShowAdButton");
sdkbox.PluginAdColony.show("video");
} else this.log("AdColony is disable");
},
onAdcolonyShowV4VCButton: function() {
if (this.AdColonyEnable) {
this.log("onAdcolonyShowV4VCButton");
sdkbox.PluginAdColony.show("v4vc");
} else this.log("AdColony is disable");
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "adcolony" ]);