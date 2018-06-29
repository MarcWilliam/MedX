import { ServerInfo } from './Servers';
import { EncryptedFile } from './contract-wraper/EncryptedFile';
import { Keystore } from './contract-wraper/Keystore';
import { KeystoreFactory } from './contract-wraper/KeystoreFactory';
import { Record } from './contract-wraper/Record';
import { RecordFactory } from './contract-wraper/RecordFactory';
export default class MedX {
    private static _instance;
    Web3Service: any;
    static SERVERS: {
        LOCALHOST: ServerInfo;
        RINKEBY: ServerInfo;
    };
    EncryptedFile: typeof EncryptedFile;
    Keystore: typeof Keystore;
    KeystoreFactory: KeystoreFactory;
    Record: typeof Record;
    RecordFactory: RecordFactory;
    private constructor();
    static setPasswordGetter(passwordGetter: any): void;
    static setPasswordSetter(passwordSetter: any): void;
    static init({ TruffleContract, LightWallet, server, passwordGetter, passwordSetter }: {
        TruffleContract: any;
        LightWallet: any;
        server?: ServerInfo;
        passwordGetter: any;
        passwordSetter: any;
    }): Promise<any>;
}
