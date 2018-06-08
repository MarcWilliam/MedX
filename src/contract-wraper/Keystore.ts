import { Contract } from './contract';
import { Record } from './Record';

export class Keystore extends Contract {

    public get contractName(): string { return "Keystore" };

    public async getKey(record: string | Record) {
        try {
            var contractInstance = await this.getContractInstance();
            var recAddress = typeof record === 'string'? record : record.address;

            var result = await contractInstance.rec2key(recAddress);

            console.log("getAttribs", result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }


}