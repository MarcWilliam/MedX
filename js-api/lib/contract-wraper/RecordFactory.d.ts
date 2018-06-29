import { Contract } from './contract';
export declare class RecordFactory extends Contract {
    readonly contractName: string;
    create({ patient, record, // json or obj of the data
    attachments }: {
        patient?: string;
        record: any;
        attachments: any;
    }, extraParams?: any): Promise<any>;
}
