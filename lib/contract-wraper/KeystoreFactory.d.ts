import { Contract } from './contract';
import { Keystore } from './Keystore';
export declare class KeystoreFactory extends Contract {
    readonly contractName: string;
    create(profile: any, extraParams?: any): Promise<any>;
    getKeyStore(_account?: string): Promise<Keystore>;
}
