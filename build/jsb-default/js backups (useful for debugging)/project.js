require = function o(e, n, t) {
function i(l, s) {
if (!n[l]) {
if (!e[l]) {
var a = "function" == typeof require && require;
if (!s && a) return a(l, !0);
if (c) return c(l, !0);
var r = new Error("Cannot find module '" + l + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
var d = n[l] = {
exports: {}
};
e[l][0].call(d.exports, function(o) {
var n = e[l][1][o];
return i(n || o);
}, d, d.exports, o, e, n, t);
}
return n[l].exports;
}
for (var c = "function" == typeof require && require, l = 0; l < t.length; l++) i(t[l]);
return i;
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
unityAdsPlacementStateChanged: function(e, n, t) {
o.showLog("unityAdsPlacementStateChanged:" + e + " oldState:" + n + " newState:" + t);
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
sdkboxplay: [ function(o, e, n) {
"use strict";
cc._RF.push(e, "195456JmLRGrot3rcm+gYHU", "sdkboxplay");
cc.Class({
extends: cc.Component,
properties: {
logLable: {
default: null,
type: cc.Label
}
},
start: function() {
this.initSDKBoxPlay();
},
initSDKBoxPlay: function() {
if ("undefined" != typeof sdkbox && "undefined" != typeof sdkbox.PluginSdkboxPlay) {
this.log("init SDKBoxPlay");
var o = this, e = sdkbox.PluginSdkboxPlay;
e.setListener({
onConnectionStatusChanged: function(n) {
cc.log("connection status change: " + n + " connection_status");
if (1e3 == n) {
cc.log("Player id: " + e.getPlayerId());
cc.log("Player name: " + e.getPlayerAccountField("name"));
o.log("connection status: " + n + " " + e.getPlayerId() + " " + e.getPlayerAccountField("name") + "(" + e.getPlayerAccountField("display_name") + ")");
} else o.log("Not connected. Status: " + n);
},
onScoreSubmitted: function(o, e, n, t, i) {
cc.log("onScoreSubmitted trigger leaderboard_name:" + o + " score:" + e + " maxScoreAllTime:" + n + " maxScoreWeek:" + t + " maxScoreToday:" + i);
},
onMyScore: function(o, e, n, t) {
cc.log("onMyScore trigger leaderboard_name:" + o + " time_span:" + e + " collection_type:" + n + " score:" + t);
},
onMyScoreError: function(o, e, n, t, i) {
cc.log("onMyScoreError trigger leaderboard_name:" + o + " time_span:" + e + " collection_type:" + n + " error_code:" + t + " error_description:" + i);
},
onPlayerCenteredScores: function(o, e, n, t) {
cc.log("onPlayerCenteredScores trigger leaderboard_name:" + o + " time_span:" + e + " collection_type:" + n + " json_with_score_entries:" + t);
},
onPlayerCenteredScoresError: function(o, e, n, t, i) {
cc.log("onPlayerCenteredScoresError trigger leaderboard_name:" + o + " time_span:" + e + " collection_type:" + n + " error_code:" + t + " error_description:" + i);
},
onIncrementalAchievementUnlocked: function(o) {
cc.log("incremental achievement " + o + " unlocked.");
},
onIncrementalAchievementStep: function(o, e) {
cc.log("incremental achievent " + o + " step: " + e);
},
onIncrementalAchievementStepError: function(o, e, n, t) {
cc.log("onIncrementalAchievementStepError trigger leaderboard_name:" + o + " steps:" + e + " error_code:" + n + " error_description:" + t);
},
onAchievementUnlocked: function(o, e) {
cc.log("onAchievementUnlocked trigger achievement_name:" + o + " newlyUnlocked:" + e);
},
onAchievementUnlockError: function(o, e, n) {
cc.log("onAchievementUnlockError trigger achievement_name:" + o + " error_code:" + e + " error_description:" + n);
},
onAchievementsLoaded: function(o, e) {
cc.log("onAchievementsLoaded trigger reload_forced:" + o + " json_achievements_info:" + e);
},
onSetSteps: function(o, e) {
cc.log("onSetSteps trigger name:" + o + " steps:" + e);
},
onSetStepsError: function(o, e, n, t) {
cc.log("onSetStepsError trigger name:" + o + " steps:" + e + " error_code:" + n + " error_description:" + t);
},
onReveal: function(o) {
cc.log("onReveal trigger name:" + o);
},
onRevealError: function(o, e, n) {
cc.log("onRevealError trigger name:" + o + " error_code:" + e + " error_description:" + n);
},
onGameData: function(o, e, n, t) {
t ? cc.log("onGameData failed:" + t) : "load" == o ? cc.log("onGameData load:" + e + ":" + n) : "save" == o ? cc.log("onGameData save:" + e + ":" + n) : cc.log("onGameData unknown action:" + o);
}
});
e.init();
e.saveGameData("name", "test");
this.SDKBoxPlayEnable = !0;
} else {
this.log("SDKBoxPlay is disable");
this.SDKBoxPlayEnable = !1;
}
},
log: function(o) {
console.log(o);
this.logLable.string = o;
},
onSDKBoxPlaySigninOrSignOutButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlaySigninOrSignOut");
sdkbox.PluginSdkboxPlay.isSignedIn() ? sdkbox.PluginSdkboxPlay.signout() : sdkbox.PluginSdkboxPlay.signin();
}
},
onSDKBoxPlayShowLeaderboardButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlayShowLeaderboard");
sdkbox.PluginSdkboxPlay.showLeaderboard("ldb1");
}
},
onSDKBoxPlayShowAchievementsButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlayShowAchievements");
sdkbox.PluginSdkboxPlay.showAchievements();
}
},
onSDKBoxPlayUnlockAchievementButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlayUnlockAchievement");
sdkbox.PluginSdkboxPlay.unlockAchievement("craftsman");
}
},
onSDKBoxPlayIncrementAchievementButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlayIncrementAchievementButton");
sdkbox.PluginSdkboxPlay.incrementAchievement("incremental", 1);
}
},
onSDKBoxPlaySubmitScoreButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlaySubmitScoreButton");
sdkbox.PluginSdkboxPlay.submitScore("ldb1", 1);
}
},
onSDKBoxPlayLoadAllDataButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlayLoadAllDataButton");
sdkbox.PluginSdkboxPlay.loadAllData();
}
},
onSDKBoxPlaySaveGameDataButton: function() {
if (this.SDKBoxPlayEnable) {
this.log("onSDKBoxPlaySaveGameDataButton");
sdkbox.PluginSdkboxPlay.saveGameData("key1", "test data");
}
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "sdkboxplay" ]);