function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { requireNativeComponent } from 'react-native';
const RNBannerView = requireNativeComponent('BannerView');
const getHeight = {
  BANNER_300x250: 250,
  BANNER_300x300: 300,
  BANNER_320x50: 50,
  BANNER_320x100: 100,
  BANNER_400x240: 240,
  BANNER_728x90: 90
};
const getWidth = {
  BANNER_300x250: 300,
  BANNER_300x300: 300,
  BANNER_320x50: 320,
  BANNER_320x100: 320,
  BANNER_400x240: 400,
  BANNER_728x90: 728
};
const getHeightForType = type => getHeight[type];
const getWidthForType = type => getWidth[type];
const BannerView = props => {
  const {
    size,
    adUnitId,
    parameters,
    onError,
    onLoad,
    onLeftApplication,
    onReturnedToApplication,
    style,
    ...restProps
  } = props;
  const height = getHeightForType(size);
  const width = getWidthForType(size);
  return /*#__PURE__*/React.createElement(RNBannerView, _extends({
    adUnitId: adUnitId,
    size: size,
    parameters: parameters,
    onError: onError,
    onLoad: onLoad,
    onLeftApplication: onLeftApplication,
    onReturnedToApplication: onReturnedToApplication,
    style: [style, {
      height: height,
      width: width
    }]
  }, restProps));
};
export default BannerView;
//# sourceMappingURL=BannerView.js.map