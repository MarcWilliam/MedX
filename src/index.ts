import { Web3Service } from './helpers/web3-service';
import SERVERS from './Servers';

//import { CONTRACT_NAME } from './contract-wraper/CONTRACT_NAME';

import Config from './helpers/config';

export default class LoyalX {
	private static _instance;

	public Web3Service;
	public static SERVERS = SERVERS;

	//public CONTRACT_NAME = CONTRACT_NAME;

	private constructor() { }

	public static setPasswordGetter(passwordGetter) { Config.passwordGetter = passwordGetter; }

	public static setPasswordSetter(passwordSetter) { Config.passwordSetter = passwordSetter; }

	public static async init({
		TruffleContract,
		lightwallet,
		server = SERVERS.LOCALHOST,
		passwordGetter,
		passwordSetter
	}) {
		if (!LoyalX._instance) {
			Config.TruffleContract = TruffleContract;
			Config.LightWallet = lightwallet;
			Config.server = server;
			Config.passwordGetter = passwordGetter;
			Config.passwordSetter = passwordSetter;

			var ret = new LoyalX();
			ret.Web3Service = await Web3Service.getInstance();
			LoyalX._instance = ret;
		}
		return LoyalX._instance;
	}

}