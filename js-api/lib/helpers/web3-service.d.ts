import { Web3Wallet } from './web3-wallet';
export declare class Web3Service {
    private static _instance;
    private _wallet;
    private _provider;
    private _web3;
    private _contracts;
    private constructor();
    private init;
    getBalance(): Promise<any>;
    testSend(): Promise<void>;
    /**
     * get the trufflecontract and cache it in memory
     * @param {string} contractName
     */
    getContract(contractName: string): Promise<any>;
    /**
    * check if meta mask is used
    */
    hasMetaMask(): boolean;
    isOnProperNetwork(): Promise<boolean>;
    getAddress(): Promise<any>;
    /**
    * get the first account
    */
    getAccount(index?: any): Promise<string>;
    readonly engine: any;
    readonly web3: any;
    readonly provider: any;
    readonly wallet: Web3Wallet;
    static getInstance(): Promise<Web3Service>;
}
