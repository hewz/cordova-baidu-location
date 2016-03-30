var exec = require('cordova/exec');

var baidu_location = {
  getCurrentPosition: function(successFn, failureFn) {
    exec(successFn, failureFn, 'BaiduLocation', 'getCurrentPosition', []);
  },
  watchPosition: function(successFn, failureFn) {
    exec(successFn, failureFn, 'BaiduLocation', 'watchPosition', []);
  },
  clearWatch: function(successFn, failureFn) {
    exec(successFn, failureFn, 'BaiduLocation', 'clearWatch', []);
  }
};

module.exports = baidu_location;
