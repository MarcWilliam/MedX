export declare class Web3Provider {
    private static _instance;
    private _engine;
    private constructor();
    init(): void;
    setRpc(url?: any): void;
    setHookedWallet(keyStore: any): void;
    startPolling(): void;
    stopPolling(): void;
    readonly engine: any;
    static readonly Instance: Web3Provider;
}
