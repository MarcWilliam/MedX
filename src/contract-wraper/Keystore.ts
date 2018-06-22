import { Contract } from './contract';
import { Record } from './Record';

export class Keystore extends Contract {

    public get contractName(): string { return "Keystore" };

    public async getAttribs() {
        try {
            var contractInstance = await this.getContractInstance();

            var result = {
                profile: JSON.parse(await contractInstance.profile()),
            };

            console.log("getAttribs", result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }

    public async getKey(record: string | Record) {
        try {
            var contractInstance = await this.getContractInstance();
            var recAddress = typeof record === 'string' ? record : record.address;

            var result = await contractInstance.rec2key(recAddress);

            console.log("getAttribs", result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }

    public async add(record: string, encKey?: string, extraParams?): Promise<any> {
        return new Keystore(await this.genericCall("add", {
            params: [record, await (this.getKey(record))],
            extraParams: extraParams
        }));
    }

    public async getRecords(record: string, extraParams?: { fromBlock?: any, toBlock?: any, filter?: { any } }): Promise<any> {
        return await this.genericEvent("added", extraParams);
    }

}