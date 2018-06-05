import { Web3Service } from '../helpers/web3-service';

export abstract class Contract {

    protected _address: string;

    public get address(): string { return this._address; }

    constructor(address?: string) {
        this._address = <any>address;
    }

	/**
	 * @return {string} the contract name
	 */
    public abstract get contractName(): string

	/**
	 * @return {TruffleContract} the contract
	 */
    public async getContract() {
        var web3ServiceInstance = await (Web3Service.getInstance());
        return web3ServiceInstance.getContract(this.contractName);
    }

	/**
	 * @return {TruffleContract Instance} the contract instance
	 */
    public async getContractInstance() {
        var contract = await this.getContract();
        return this.address ? contract.at(this.address) : contract.deployed();
    }

    protected async genericCall(functionName: string, params: any[], extraParams?): Promise<any> {
        try {

            var contractInstance = await this.getContractInstance();

            extraParams = extraParams || {};

            if (extraParams.account == null) {
                let web3ServiceInstance = await (Web3Service.getInstance());
                extraParams.account = await web3ServiceInstance.getAccount();
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
            var web3ServiceInstance = await (Web3Service.getInstance());
            var account = await web3ServiceInstance.getAccount();

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