import { Contract } from './contract';
export declare class EncryptedFile extends Contract {
    readonly contractName: string;
    getAttribs(): Promise<EncryptedFileDat>;
}
export interface EncryptedFileDat {
    filePath: string;
    dataHash: string;
    hashMethod: string;
    encriptionMethod: string;
}
