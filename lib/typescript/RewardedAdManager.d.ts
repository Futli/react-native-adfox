interface RewardedResp {
    amount: bigint;
    type: string;
    click: boolean;
}
declare const _default: {
    showAd(adUnitId: string): Promise<RewardedResp>;
};
export default _default;
