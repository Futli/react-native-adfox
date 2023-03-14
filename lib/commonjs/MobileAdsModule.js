"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const {
  MobileAds
} = _reactNative.NativeModules;
const IConfigurationDefaults = {
  userConsent: false,
  locationConsent: false,
  enableLogging: false,
  enableDebugErrorIndicator: false
};
var _default = {
  initialize(configuration) {
    return MobileAds.initialize({
      ...IConfigurationDefaults,
      ...configuration
    });
  }
};
exports.default = _default;
//# sourceMappingURL=MobileAdsModule.js.map