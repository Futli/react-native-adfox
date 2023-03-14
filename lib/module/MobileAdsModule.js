import { NativeModules } from 'react-native';
const {
  MobileAds
} = NativeModules;
const IConfigurationDefaults = {
  userConsent: false,
  locationConsent: false,
  enableLogging: false,
  enableDebugErrorIndicator: false
};
export default {
  initialize(configuration) {
    return MobileAds.initialize({
      ...IConfigurationDefaults,
      ...configuration
    });
  }
};
//# sourceMappingURL=MobileAdsModule.js.map