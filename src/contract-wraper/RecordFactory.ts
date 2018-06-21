import { Contract } from './contract';
import { EncryptedFileDat } from './EncryptedFile';
import { EcnriptionHandler, IpfsDataOpject } from '../helpers/encription-handler';
import { IPFSservice } from '../helpers/ipfs-service';
import { StatisticsHandler } from '../helpers/statistics-handler';

export class RecordFactory extends Contract {
    encHandler: EcnriptionHandler;
    ipfsSevice: IPFSservice;
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
        this.encHandler = new EcnriptionHandler();
        this.ipfsSevice = new IPFSservice();
        this.ipfsSevice.init();
        let key = this.encHandler.GenKey_256();
        let ipfsDataOpject = new IpfsDataOpject();
        ipfsDataOpject = <IpfsDataOpject>await this.ipfsSevice.ipfsInsert(record);
        //> record = encript files
        //> upload files to ipfs
        //> doctorsKey = gen enc key with dr public ( dr key is the one in account)
        //> patientKey = gen enc key with pattient public

        let recordInfo = <EncryptedFileDat>{
            filePath: "",
            dataHash: "",
            hashMethod: "",
            encriptionMethod: "",

        };

        record.filePath = ipfsDataOpject.cypherText;
        record.dataHash = ipfsDataOpject.dataHash;
        record.hashMethod = ipfsDataOpject.hashMethod;
        record.encriptionMethod = ipfsDataOpject.encryptionMethod;
        var patientKey = "";
        var doctorsKey = "";

        return this.genericCall("create", { params: [patient, patientKey, doctorsKey, recordInfo, attachments], extraParams: extraParams });
    }

}