interface IConfiguration {
    userConsent?: boolean;
    locationConsent?: boolean;
    enableLogging?: boolean;
    enableDebugErrorIndicator?: boolean;
}
declare const _default: {
    initialize(configuration: IConfiguration): null;
};
export default _default;
