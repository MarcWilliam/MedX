import { Web3Service } from '../helpers/web3-service';


export interface GenericCallArgs {
    params?: any;
    extraParams?: any;
}

export abstract class Contract {

    static ABI;
    static ADDRESS;

    protected _address: string;

    public get address(): string { return this._address; }

    constructor(address?: string) {
        this._address = <any>address;
    }

	/**
	 * @return {TruffleContract Instance} the contract instance
	 */
    public async getContractInstance() {
        var contract = await this.getContract();
        return this.address ? contract.at(this.address) : contract.deployed();
    }

    public async getAttribs(attribs?: string[]): Promise<any> {
        if (!attribs)
            throw (`please provide attrib parameters to .getAttribs(["attrib1", "attrib2"])`);
        try {
            var contractInstance = await this.getContractInstance();
            var result = {};

            for (const i in attribs) {
                const attName = attribs[i];
                result[attName] = await contractInstance[attName]();
            }

            console.log("getAttribs", result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }

    protected async genericCall(functionName: string, args?: GenericCallArgs): Promise<any> {
        try {

            var contractInstance = await this.getContractInstance();

            let params = (args && args.params) ? args.params : [];
            let extraParams = (args && args.extraParams) ? args.extraParams : {};

            if (extraParams.from == null) {
                extraParams.from = await Web3Service.getAccount();
            }

            if (extraParams.gas == null) {
                extraParams.gas = 5000000;
            }

            var result = await contractInstance[functionName](...params, extraParams);

            console.log(functionName, result);
            return result;
        } catch (err) {
            console.warn(functionName, err.message);
            throw err;
        }
    }

    protected async genericEvent(eventName: string, extraParams?: { fromBlock?: any, toBlock?: any, filter?: { any } }): Promise<any[]> {
        try {
            var contractInstance = await this.getContractInstance();
            var account = await Web3Service.getAccount();

            extraParams = extraParams || {};
            extraParams.fromBlock = extraParams.fromBlock || 0;
            extraParams.toBlock = extraParams.toBlock || 'latest';

            var event = await contractInstance[eventName](
                { _from: account },
                { fromBlock: extraParams.fromBlock, toBlock: extraParams.toBlock, filter: extraParams.filter }
            );

            var result = <any[]>await new Promise((resolve, reject) => {
                event.get((error, logs) => error ? reject(error) : resolve(logs));
            });

            console.log(eventName, result);
            return result;
        } catch (err) {
            console.warn(err.message);
            throw err;
        }
    }

}