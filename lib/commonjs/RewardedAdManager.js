"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const {
  RewardedAdManager
} = _reactNative.NativeModules;
var _default = {
  showAd(adUnitId) {
    return RewardedAdManager.showAd(adUnitId);
  }
};
exports.default = _default;
//# sourceMappingURL=RewardedAdManager.js.map