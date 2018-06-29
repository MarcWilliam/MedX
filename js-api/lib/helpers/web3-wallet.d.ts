export declare class Web3Wallet {
    private static _instance;
    private lightWallet;
    private _keyStore;
    private _address;
    private constructor();
    private _init;
    private _createKeyStore;
    private _passwordProvider;
    private _keyFromPassword;
    private _generateAddresses;
    private _getPassword;
    private _setPassword;
    getAddress(index?: any): Promise<any>;
    readonly keyStore: any;
    static getInstance(): Promise<Web3Wallet>;
}
