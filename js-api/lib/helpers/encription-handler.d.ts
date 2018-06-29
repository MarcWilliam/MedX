/// <reference types="node" />
export declare class EcnriptionHandler {
    private data;
    constructor();
    GenKey_256(): string;
    private AES_Encrypt;
    private AES_Decrypt;
    encrypt(bytes: any, key?: string, eType?: string, keySize?: string): void;
    decrypt(C_Text: any, eType: string | undefined, key: any, KeySize?: string): any;
    hash(bytes: any, type?: string): any;
    add(inputarr: any, data: any, encrKey?: string): IpfsDataOpject;
    retrive(dataOpject: any): {
        massage: string;
        data: string;
    };
    toBuffer(str: string): Buffer;
    bufferToHex(buffer: Buffer): string;
}
export declare class IpfsDataOpject {
    encryptionKey: string;
    cypherText: string;
    encryptionMethod: string;
    dataHash: string;
    hashMethod: any;
    constructor();
}
