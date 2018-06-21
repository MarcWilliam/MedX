let Web3 = require('web3');

import { Web3Provider } from './web3-provider';
import { Web3Wallet } from './web3-wallet';

import { ContractArtifact } from './contract-artifact';

import Config from './config';

export class Web3Service {

	private static _instance: Web3Service;

	private _wallet: Web3Wallet;
	private _provider = Web3Provider.Instance;
	private _web3: any;
	private _contracts: any = {};

	private constructor() { }

	private async init() {
		try {
			this._wallet = await Web3Wallet.getInstance();

			this._provider.setHookedWallet(this._wallet.keyStore);
			this._provider.setRpc(Config.server.HTTP_PROVIDER);
			this._provider.stopPolling();
			this._provider.startPolling();

			this._web3 = new Web3(this._provider.engine);
		}
		catch (err) {
			throw err;
		}
		return this;
	}

	public async getBalance() {
		try {
			let address = await (this._wallet.getAddress());
			let balance = this._web3.utils.fromWei(await (this._web3.eth.getBalance(address)), "ether");
			return balance;
		} catch (err) {
			console.warn("getBalance", err);
			throw err;
		}
	}

	public async testSend() {
		var fromAddr = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
		var toAddr = await (this._wallet.getAddress());
		var valueEth = "1";
		var value = parseFloat(valueEth) * 1.0e18
		var gasPrice = 1
		var gas = 55555555555
		this._web3.eth.sendTransaction({ from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas }, function (err, txhash) {
			console.log('error: ', err)
			console.log('txhash: ', txhash)
		})
	}

	/**
	 * get the trufflecontract and cache it in memory
	 * @param {string} contractName 
	 */
	public async getContract(contractName: string) {
		if (this._contracts[contractName]) {
			return this._contracts[contractName];
		}
		// Get the necessary contract artifact file and instantiate it with truffle-contract.
		var contractArtifact = await ContractArtifact.get(contractName);
		var contract = Config.TruffleContract(contractArtifact);
		// var contract = new this.Web3Provider.web3.eth.Contract(contractArtifact);
		contract.setProvider(this.provider); // Set the provider for our contract.
		this._contracts[contractName] = contract;

		// workaround stolen from https://github.com/trufflesuite/truffle-contract/issues/57
		if (typeof contract.currentProvider.sendAsync !== "function") {
			contract.currentProvider.sendAsync = function () {
				return contract.currentProvider.send.apply(
					contract.currentProvider, arguments
				);
			};
		}

		return contract;
	}

	/**
 	* check if meta mask is used
 	*/
	public hasMetaMask() {
		return ((typeof this._web3 !== "undefined") && (this._web3.currentProvider.isMetaMask === true));
	}

	public isOnProperNetwork(): Promise<boolean> {
		var promise: Promise<boolean> = new Promise((resolve, reject) => {

			(<any>this._web3.eth.net).getNetworkType()
				.then(networkType => console.log("Network type", networkType));

			(<any>this._web3.eth.net).getId((err, netId) => {
				if (err) {
					console.warn(err);
					reject(err);
				} else {
					console.log("Network id", netId);
					if (Config.server.NETWORK_ID == null) {
						console.warn("no network id specified in config, ignoring network check");
					}
					resolve((Config.server.NETWORK_ID == null) || (netId == Config.server.NETWORK_ID));
				}
			});

		});

		return promise;
	}

	public async getAddress() {
		try {
			let address = await (this._wallet.getAddress());
			return address;
		} catch (err) {
			console.warn("getAddress", err);
			throw err;
		}
	}

	/**
 	* get the first account
 	*/
	public async getAccount(index?): Promise<string> {
		try {
			let address = await (this._wallet.getAddress(index));
			return address;
		} catch (err) {
			console.warn("getAccount", err);
			throw err;
		}
	}

	public get engine(): any { return this._provider.engine; }
	public get web3(): any { return this._web3; }
	public get provider() { return this._web3.currentProvider; }
	public get wallet() { return this._wallet; }

	public static async getInstance() {
		try {
			if (!Web3Service._instance) {
				Web3Service._instance = await new Web3Service().init();
			}
		}
		catch (err) {
			throw err;
		}
		return Web3Service._instance;
	}

}
