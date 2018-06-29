export interface GenericCallArgs {
    params?: any;
    extraParams?: any;
}
export declare abstract class Contract {
    protected _address: string;
    readonly address: string;
    constructor(address?: string);
    /**
     * @return {string} the contract name
     */
    abstract readonly contractName: string;
    /**
     * @return {TruffleContract} the contract
     */
    getContract(): Promise<any>;
    /**
     * @return {TruffleContract Instance} the contract instance
     */
    getContractInstance(): Promise<any>;
    getAttribs(attribs?: string[]): Promise<any>;
    protected genericCall(functionName: string, args?: GenericCallArgs): Promise<any>;
    protected genericEvent(eventName: string, extraParams?: {
        fromBlock?: any;
        toBlock?: any;
        filter?: {
            any: any;
        };
    }): Promise<any[]>;
}
