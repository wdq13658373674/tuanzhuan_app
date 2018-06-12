cordova.define("cordova-plugin-push-baidu.baiduPush", function(require, exports, module) {
var exec = require('cordova/exec');

var baiduPush = {
  onMessage: function(successCallback, failureCallback){
      exec(successCallback, failureCallback, 'BaiduPush', 'onMessage', []);
  },
  onNotificationClicked: function(successCallback, failureCallback){
      exec(successCallback, failureCallback, 'BaiduPush', 'onNotificationClicked', []);
  },
  onNotificationArrived: function(successCallback, failureCallback){
      exec(successCallback, failureCallback, 'BaiduPush', 'onNotificationArrived', []);
  },
  startWork: function(api_key, successCallback, failureCallback) {
    exec(successCallback, failureCallback, 'BaiduPush', 'startWork', [api_key]);
  },
  stopWork: function(successCallback, failureCallback) {
    exec(successCallback, failureCallback, 'BaiduPush', 'stopWork', []);
  },
  resumeWork: function(successCallback, failureCallback) {
    exec(successCallback, failureCallback, 'BaiduPush', 'resumeWork');
  },
  setTags: function(tags, successCallback, failureCallback) {
    exec(successCallback, failureCallback, 'BaiduPush', 'setTags', tags);
  },
  delTags: function(tags, successCallback, failureCallback) {
    exec(successCallback, failureCallback, 'BaiduPush', 'delTags', tags);
  }
}

module.exports = baiduPush;
});
