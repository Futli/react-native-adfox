"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const {
  InterstitialAdManager
} = _reactNative.NativeModules;
var _default = {
  showAd(adUnitId, parameters) {
    return InterstitialAdManager.showAd(adUnitId, parameters);
  }
};
exports.default = _default;
//# sourceMappingURL=InterstitialAdManager.js.map