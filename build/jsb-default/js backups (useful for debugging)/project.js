require = function o(e, n, i) {
function t(c, s) {
if (!n[c]) {
if (!e[c]) {
var r = "function" == typeof require && require;
if (!s && r) return r(c, !0);
if (l) return l(c, !0);
var g = new Error("Cannot find module '" + c + "'");
throw g.code = "MODULE_NOT_FOUND", g;
}
var a = n[c] = {
exports: {}
};
e[c][0].call(a.exports, function(o) {
var n = e[c][1][o];
return t(n || o);
}, a, a.exports, o, e, n, i);
}
return n[c].exports;
}
for (var l = "function" == typeof require && require, c = 0; c < i.length; c++) t(i[c]);
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
fbLoginText: "login"
},
onLoad: function() {
this.label.string = this.text;
cc.sys.isMobile && this.testSdkbox();
},
update: function(o) {},
testSdkbox: function() {
sdkbox.PluginFacebook.init();
sdkbox.PluginFacebook.setListener({
onLogin: function(o, e) {
self.label.string = o ? "login successful" : "login failed";
},
onSharedSuccess: function(o) {
self.label.string = o;
self.fbLoginText.string = "logout";
},
onSharedFailed: function(o) {
self.label.string = msg;
self.fbLoginText.string = "login";
},
onGetUserInfo: function(o) {
self.label.string = "onGetUserInfo";
console.log("Facebook > ", o.first_name);
console.log("Facebook > ", o.id);
console.log("Facebook > ", o.installed);
console.log("Facebook > ", o.is_silhouette);
console.log("Facebook > ", o.last_name);
console.log("Facebook > ", o.name);
console.log("Facebook > ", o.picture);
console.log("Facebook > ", o.picture_url);
console.log("Facebook > ", o.score);
},
onAPI: function(o, e) {
self.label.string = o + e;
},
onFetchFriends: function(o, e) {
self.label.string = "onFetchFriends" + e;
},
onPermission: function(o, e) {
self.label.string = "onPermission" + e;
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
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld" ]);