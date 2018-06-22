import { Contract } from './contract';
import { EncryptedFileDat } from './EncryptedFile';
import { EcnriptionHandler, IpfsDataOpject } from '../helpers/encription-handler';
import { IPFSservice } from '../helpers/ipfs-service';
import { StatisticsHandler } from '../helpers/statistics-handler';

export class RecordFactory extends Contract {

    public get contractName(): string { return "RecordFactory" };

    public async create({
        patient = "",
        record, // json or obj of the data
        attachments // an array of string with the file path
    }, extraParams?): Promise<any> {
        //extraParams = extraParams || { gas: 5000000 };
        //extraParams.gas = extraParams.gas || extraParams.gas == 5000000;
        /*
        //>> get user anonymous pk
        //>> upload record to statistics DB using anonymous pk

        let encHandler = new EcnriptionHandler();
        let ipfsSevice = new IPFSservice();
        ipfsSevice.init();

        let key = this.encHandler.GenKey_256();
        let ipfsDataOpject = new IpfsDataOpject();
        ipfsDataOpject = <IpfsDataOpject>await this.ipfsSevice.ipfsInsert(record);
        //> record = encript files
        //> upload files to ipfs
        //> doctorsKey = gen enc key with dr public ( dr key is the one in account)
        //> patientKey = gen enc key with pattient public
        */

        var patientKey = "";
        var doctorsKey = "";
        let recordInfo = <EncryptedFileDat>{
            filePath: JSON.stringify(record), // ipfsDataOpject.cypherText;
            dataHash: "", // ipfsDataOpject.dataHash;
            hashMethod: "", // ipfsDataOpject.hashMethod;
            encriptionMethod: "", // ipfsDataOpject.encryptionMethod;

        };

        return this.genericCall("createQuick", {
            params: [
                patient,
                patientKey,
                doctorsKey,
                recordInfo.filePath,
                recordInfo.dataHash,
                recordInfo.hashMethod,
                record.encriptionMethod,
                attachments
            ],
            extraParams: extraParams
        });
    }

}