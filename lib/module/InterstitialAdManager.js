import { NativeModules } from 'react-native';
const {
  InterstitialAdManager
} = NativeModules;
export default {
  showAd(adUnitId, parameters) {
    return InterstitialAdManager.showAd(adUnitId, parameters);
  }
};
//# sourceMappingURL=InterstitialAdManager.js.map