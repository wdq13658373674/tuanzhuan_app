cordova.define("cordova-alipay-chenyu.MyAlipay", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "MyAlipay", "coolMethod", [arg0]);
};

});
