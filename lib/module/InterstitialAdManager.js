import { NativeModules } from 'react-native';
const {
  InterstitialAdManager
} = NativeModules;
export default {
  showAd(adUnitId) {
    return InterstitialAdManager.showAd(adUnitId);
  }
};
//# sourceMappingURL=InterstitialAdManager.js.map