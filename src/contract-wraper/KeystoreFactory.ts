import { Web3Service } from '../helpers/web3-service';
import { Contract } from './contract';
import { Keystore } from './Keystore';

export class KeystoreFactory extends Contract {

    public get contractName(): string { return "KeystoreFactory" };

    public async create(profile, extraParams?): Promise<any> {
        return new Keystore(await this.genericCall("create", {
            params: [JSON.stringify(profile)],
            extraParams: extraParams
        }));
    }

    public async getKeyStore(_account?: string) {
        try {
            var contractInstance = await this.getContractInstance();
            var web3ServiceInstance = await (Web3Service.getInstance());
            var account = _account ? _account : (await web3ServiceInstance.getAccount());

            var result = await contractInstance.owner(account);

            console.log("getAttribs", result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }

}