import { StyleProp, ViewStyle } from 'react-native';
type AdType = 'BANNER_300x250' | 'BANNER_300x300' | 'BANNER_320x50' | 'BANNER_320x100' | 'BANNER_240x400' | 'BANNER_728x90';
interface BannerViewProps {
    size: AdType;
    adUnitId: string;
    parameters: object;
    onError?: Function;
    onLoad?: Function;
    onLeftApplication?: Function;
    onReturnedToApplication?: Function;
    style?: StyleProp<ViewStyle>;
}
declare const BannerView: (props: BannerViewProps) => JSX.Element;
export default BannerView;
