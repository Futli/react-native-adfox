import { NativeModules } from 'react-native';
const {
  RewardedAdManager
} = NativeModules;
export default {
  showAd(adUnitId) {
    return RewardedAdManager.showAd(adUnitId);
  }
};
//# sourceMappingURL=RewardedAdManager.js.map