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
        this.initSDKBoxPlay();
    },

    // update (dt) {},

    initSDKBoxPlay() {
        if ('undefined' == typeof sdkbox || 'undefined' == typeof sdkbox.PluginSdkboxPlay) {
            this.log('SDKBoxPlay is disable');
            this.SDKBoxPlayEnable = false;
            return;
        }

        this.log('init SDKBoxPlay');

        let self = this;
        let plugin = sdkbox.PluginSdkboxPlay
        plugin.setListener({
            onConnectionStatusChanged: function(connection_status) {
                cc.log("connection status change: " + connection_status + " connection_status");
                if (connection_status == 1000) {
                    cc.log('Player id: ' + plugin.getPlayerId());
                    cc.log('Player name: ' + plugin.getPlayerAccountField("name"));
                    self.log("connection status: " + connection_status + " " + plugin.getPlayerId() + " " + plugin.getPlayerAccountField("name") + "(" + plugin.getPlayerAccountField("display_name") + ")");
                } else {
                    self.log("Not connected. Status: " + connection_status);
                }
            },
            onScoreSubmitted: function(leaderboard_name, score, maxScoreAllTime, maxScoreWeek, maxScoreToday) {
                cc.log('onScoreSubmitted trigger leaderboard_name:' + leaderboard_name + ' score:' + score + ' maxScoreAllTime:' + maxScoreAllTime + ' maxScoreWeek:' + maxScoreWeek + ' maxScoreToday:' + maxScoreToday);
            },
            onMyScore: function(leaderboard_name, time_span, collection_type, score) {
                cc.log('onMyScore trigger leaderboard_name:' + leaderboard_name + ' time_span:' + time_span + ' collection_type:' + collection_type + ' score:' + score);
            },
            onMyScoreError: function(leaderboard_name, time_span, collection_type, error_code, error_description) {
                cc.log('onMyScoreError trigger leaderboard_name:' + leaderboard_name + ' time_span:' + time_span + ' collection_type:' + collection_type + ' error_code:' + error_code + ' error_description:' + error_description);
            },
            onPlayerCenteredScores: function(leaderboard_name, time_span, collection_type, json_with_score_entries) {
                cc.log('onPlayerCenteredScores trigger leaderboard_name:' + leaderboard_name + ' time_span:' + time_span + ' collection_type:' + collection_type + ' json_with_score_entries:' + json_with_score_entries);
            },
            onPlayerCenteredScoresError: function(leaderboard_name, time_span, collection_type, error_code, error_description) {
                cc.log('onPlayerCenteredScoresError trigger leaderboard_name:' + leaderboard_name + ' time_span:' + time_span + ' collection_type:' + collection_type + ' error_code:' + error_code + ' error_description:' + error_description);
            },
            onIncrementalAchievementUnlocked: function(achievement_name) {
                cc.log("incremental achievement " + achievement_name + " unlocked.");
            },
            onIncrementalAchievementStep: function(achievement_name, step) {
                cc.log("incremental achievent " + achievement_name + " step: " + step);
            },
            onIncrementalAchievementStepError: function(name, steps, error_code, error_description) {
                cc.log('onIncrementalAchievementStepError trigger leaderboard_name:' + name + ' steps:' + steps + ' error_code:' + error_code + ' error_description:' + error_description);
            },
            onAchievementUnlocked: function(achievement_name, newlyUnlocked) {
                cc.log('onAchievementUnlocked trigger achievement_name:' + achievement_name + ' newlyUnlocked:' + newlyUnlocked);
            },
            onAchievementUnlockError: function(achievement_name, error_code, error_description) {
                cc.log('onAchievementUnlockError trigger achievement_name:' + achievement_name + ' error_code:' + error_code + ' error_description:' + error_description);
            },
            onAchievementsLoaded: function(reload_forced, json_achievements_info) {
                cc.log('onAchievementsLoaded trigger reload_forced:' + reload_forced + ' json_achievements_info:' + json_achievements_info);
            },
            onSetSteps: function(name, steps) {
                cc.log('onSetSteps trigger name:' + name + ' steps:' + steps);
            },
            onSetStepsError: function(name, steps, error_code, error_description) {
                cc.log('onSetStepsError trigger name:' + name + ' steps:' + steps + ' error_code:' + error_code + ' error_description:' + error_description);
            },
            onReveal: function(name) {
                cc.log('onReveal trigger name:' + name);
            },
            onRevealError: function(name, error_code, error_description) {
                cc.log('onRevealError trigger name:' + name + ' error_code:' + error_code + ' error_description:' + error_description);
            },
            onGameData: function(action, name, data, error) {
                if (error) {
                    // failed
                    cc.log('onGameData failed:' + error);
                } else {
                    //success
                    if ('load' == action) {
                        cc.log('onGameData load:' + name + ':' + data);
                    } else if ('save' == action) {
                        cc.log('onGameData save:' + name + ':' + data);
                    } else {
                        cc.log('onGameData unknown action:' + action);
                    }
                }
            }
        });
        plugin.init();

        // ref to http://discuss.cocos2d-x.org/t/sdkbox-play-savegamedata-error/39367
        plugin.saveGameData("name", 'test'); // crash here ?

        this.SDKBoxPlayEnable = true;
    },

    log(text) {
        console.log(text)
        this.logLable.string = text;
    },

    onSDKBoxPlaySigninOrSignOutButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlaySigninOrSignOut');

        if (sdkbox.PluginSdkboxPlay.isSignedIn()) {
            sdkbox.PluginSdkboxPlay.signout();
        } else {
            sdkbox.PluginSdkboxPlay.signin();
        }
    },

    onSDKBoxPlayShowLeaderboardButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlayShowLeaderboard');
        sdkbox.PluginSdkboxPlay.showLeaderboard("ldb1");
    },

    onSDKBoxPlayShowAchievementsButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlayShowAchievements');
        sdkbox.PluginSdkboxPlay.showAchievements();
    },

    onSDKBoxPlayUnlockAchievementButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlayUnlockAchievement');
        sdkbox.PluginSdkboxPlay.unlockAchievement("craftsman");
        // sdkbox.PluginSdkboxPlay.unlockAchievement("hunter");
        // sdkbox.PluginSdkboxPlay.unlockAchievement("ten-games");
    },

    onSDKBoxPlayIncrementAchievementButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlayIncrementAchievementButton');
        sdkbox.PluginSdkboxPlay.incrementAchievement("incremental", 1);
    },

    onSDKBoxPlaySubmitScoreButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlaySubmitScoreButton');
        const score = 1;
        sdkbox.PluginSdkboxPlay.submitScore("ldb1", score);
    },

    onSDKBoxPlayLoadAllDataButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlayLoadAllDataButton');
        sdkbox.PluginSdkboxPlay.loadAllData();
    },

    onSDKBoxPlaySaveGameDataButton() {
        if (!this.SDKBoxPlayEnable) {
            return;
        }
        this.log('onSDKBoxPlaySaveGameDataButton');
        sdkbox.PluginSdkboxPlay.saveGameData("key1", "test data");
    },


});
