import { Contract } from './contract';
import { EncryptedFileDat } from './EncryptedFile';

export class RecordFactory extends Contract {

    public get contractName(): string { return "RecordFactory" };

    public async create({
        patient = "",
        record, // json or obj of the data
        attachments // an array of string with the file path
    }, extraParams?): Promise<any> {
        //extraParams = extraParams || { gas: 5000000 };
        //extraParams.gas = extraParams.gas || extraParams.gas == 5000000;

        //>> get user anonymous pk
        //>> upload record to statistics DB using anonymous pk
        //> record = encript files
        //> upload files to ipfs
        //> doctorsKey = gen enc key with dr public ( dr key is the one in account)
        //> patientKey = gen enc key with pattient public

        record = <EncryptedFileDat> {
            filePath: "",
            dataHash: "",
            hashMethod: "",
            encriptionMethod: ""
        };
        var patientKey = "";
        var doctorsKey = "";

        return this.genericCall("create", [patient, patientKey, doctorsKey, record, attachments], extraParams);
    }

}