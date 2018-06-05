import Config from './config';

const ProviderEngine = require("web3-provider-engine");
//Provider Engine sub-modules
const HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js');
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js');

export class Web3Provider {
	private static _instance: Web3Provider;

	private _engine: any;

	private constructor() {
		this._engine = new ProviderEngine();
		this.init();
	}

	init() {
	}

	// data source
	setRpc(url?: any) {
		this._engine.addProvider(new RpcSubprovider({
			rpcUrl: url || Config.server.HTTP_PROVIDER
		}));
	}
	// id mgmt
	setHookedWallet(keyStore: any) {
		this._engine.addProvider(new HookedWalletSubprovider({
			getAccounts: (cb) => {
				cb(null, keyStore.getAddresses());
			},
			signTransaction: keyStore.signTransaction.bind(keyStore)
		}));
	}

	// start polling for blocks
	startPolling() {
		this._engine.start();
	}
	// stop polling for blocks
	stopPolling() {
		this._engine.stop();
	}

	public get engine() {
		return this._engine;
	}

	public static get Instance() {
		try {
			if (!Web3Provider._instance) {
				Web3Provider._instance = new Web3Provider();
			}
		}
		catch (err) {
			throw err;
		}
		return Web3Provider._instance;
	}
}
