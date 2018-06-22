import { Contract } from './contract';
import { Record } from './Record';
export declare class Keystore extends Contract {
    readonly contractName: string;
    getAttribs(): Promise<{
        profile: any;
    }>;
    getKey(record: string | Record): Promise<any>;
    add(record: string, encKey?: string, extraParams?: any): Promise<any>;
    getRecords(record: string, extraParams?: {
        fromBlock?: any;
        toBlock?: any;
        filter?: {
            any: any;
        };
    }): Promise<any>;
}
