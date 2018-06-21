import { Contract } from './contract';
import { EcnriptionHandler } from '../helpers/encription-handler';
import { IPFSservice } from '../helpers/ipfs-service';
export declare class RecordFactory extends Contract {
    encHandler: EcnriptionHandler;
    ipfsSevice: IPFSservice;
    readonly contractName: string;
    create({ patient, record, // json or obj of the data
    attachments }: {
        patient?: string;
        record: any;
        attachments: any;
    }, extraParams?: any): Promise<any>;
}
