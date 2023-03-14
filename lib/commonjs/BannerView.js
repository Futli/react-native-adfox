"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RNBannerView = (0, _reactNative.requireNativeComponent)('BannerView');
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
  return /*#__PURE__*/_react.default.createElement(RNBannerView, _extends({
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
var _default = BannerView;
exports.default = _default;
//# sourceMappingURL=BannerView.js.map