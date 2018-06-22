import { Contract } from './contract';
import { EncryptedFile } from './EncryptedFile';

export class Record extends Contract {

    public get contractName() { return "Record" };

    public async getAttribs() {
        try {
            var contractInstance = await this.getContractInstance();

            var result = {
                patient: await contractInstance.patient(),
                doctor: await contractInstance.doctor(),
                createdAt: new Date((await contractInstance.createdAt()).toNumber()),
                record: new EncryptedFile(await contractInstance.record()),
                //attachments: (await contractInstance.attachments()).map(a => new EncryptedFile(a))
            };

            console.log("getAttribs", result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }

}

export interface RecordDat {
    patient: string;
    doctor: string;
    createdAt: Date;

    record: EncryptedFile;
    attachments: EncryptedFile[];
}