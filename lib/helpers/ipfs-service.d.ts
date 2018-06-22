import { EcnriptionHandler } from './encription-handler';
export declare class IPFSservice {
    node: any;
    encrServece: EcnriptionHandler;
    isInit: boolean;
    constructor();
    init(url?: string): Promise<void>;
    ipfsInsert(data: any, key?: string): Promise<{} | undefined>;
    readFile(file_Url: any): Promise<{} | undefined>;
    retriveIpfs(dataOpject: any): Promise<{}>;
    private addToIpfs;
}
