import { Contract } from './contract';
import { EncryptedFile } from './EncryptedFile';
export declare class Record extends Contract {
    readonly contractName: string;
    getAttribs(): Promise<{
        patient: any;
        doctor: any;
        createdAt: Date;
        record: EncryptedFile;
    }>;
}
export interface RecordDat {
    patient: string;
    doctor: string;
    createdAt: Date;
    record: EncryptedFile;
    attachments: EncryptedFile[];
}
